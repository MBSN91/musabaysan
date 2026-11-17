// Motion for musabaysan.nl, "kinetic reel". GSAP with ScrollTrigger, ScrollSmoother and SplitText.
// Rules: content is readable without script; reduced motion gets no smoothing, pinning, splitting or
// travel, only final states; hover effects only for fine pointers; one ease-out curve family.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { rings } from '../data/orbit';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const root = document.documentElement;
const EASE = 'expo.out';
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => [...el.querySelectorAll<T>(s)];
const motion = !matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const desk = () => matchMedia('(min-width: 901px)').matches;

/* ---------- theme ---------- */
const toggle = $<HTMLButtonElement>('[data-theme-toggle]');
const themeMeta = $<HTMLMetaElement>('meta[name="theme-color"]');
const syncTheme = () => {
	const light = root.dataset.theme === 'light';
	toggle?.setAttribute('aria-pressed', String(light));
	themeMeta?.setAttribute('content', light ? '#ffffff' : '#000000');
};
syncTheme();
toggle?.addEventListener('click', () => {
	root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
	try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
	syncTheme();
});

/* ---------- rolling numbers ---------- */
type Roll = { el: HTMLElement; cols: { col: HTMLElement; d: number }[] };
const rolls: Roll[] = $$('[data-roll]').map((el) => {
	const text = el.textContent ?? '';
	if (!motion) return { el, cols: [] };
	const cols: Roll['cols'] = [];
	const vis = document.createElement('span');
	vis.className = 'rnum';
	vis.setAttribute('aria-hidden', 'true');
	for (const ch of text) {
		if (/\d/.test(ch)) {
			const col = document.createElement('span');
			col.className = 'rcol';
			col.innerHTML = Array.from({ length: 20 }, (_, i) => `<span>${i % 10}</span>`).join('');
			vis.appendChild(col);
			cols.push({ col, d: Number(ch) });
		} else {
			const s = document.createElement('span');
			s.className = 'rch';
			s.textContent = ch;
			vis.appendChild(s);
		}
	}
	el.innerHTML = `<span class="sr">${text}</span>`;
	el.appendChild(vis);
	return { el, cols };
});
const rollTarget = (d: number) => -((10 + d) * 5);
// Rolls rest on their real value; they only spin through the digits as they come into view.
rolls.forEach((r) => r.cols.forEach(({ col, d }) => gsap.set(col, { yPercent: rollTarget(d) })));
const playRoll = (r: Roll, delay = 0) =>
	r.cols.forEach(({ col, d }, i) => gsap.fromTo(col, { yPercent: 0 }, { yPercent: rollTarget(d), duration: 1.6, ease: 'expo.inOut', delay: delay + i * 0.08 }));
const rollOnView = (r: Roll, trigger: Element = r.el, start = 'top 88%') =>
	ScrollTrigger.create({ trigger, start, once: true, onEnter: () => playRoll(r, 0.15) });

/* ---------- display type fitted to its box (layout, not motion) ---------- */
const fitType = () => $$('[data-fit]').forEach((el) => {
	const text = $('[data-fit-text]', el) ?? el;
	el.style.fontSize = '';
	const avail = el.clientWidth;
	const w = text.getBoundingClientRect().width;
	if (!avail || !w) return;
	const size = parseFloat(getComputedStyle(el).fontSize);
	el.style.fontSize = `${Math.floor((size * avail * 0.995) / w * 100) / 100}px`;
});
fitType();
document.fonts?.ready.then(fitType);
let fitTimer = 0;
window.addEventListener('resize', () => {
	clearTimeout(fitTimer);
	fitTimer = window.setTimeout(() => { fitType(); ScrollTrigger.refresh(); }, 150);
});

/* ---------- curtain between pages ---------- */
const curtain = $('.curtain');
const curtainLabel = $('[data-curtain-label]');
const leave = (href: string, label: string) => {
	if (!curtain) return (location.href = href);
	if (curtainLabel) curtainLabel.textContent = label;
	curtain.classList.add('is-active');
	try { sessionStorage.setItem('curtain', label || ' '); } catch (e) {}
	gsap.fromTo(curtain, { yPercent: 100 }, { yPercent: 0, duration: 0.75, ease: 'expo.inOut', onComplete: () => { location.href = href; } });
};
if (root.classList.contains('arriving') && curtain) {
	let label = '';
	try { label = sessionStorage.getItem('curtain') ?? ''; sessionStorage.removeItem('curtain'); } catch (e) {}
	if (curtainLabel) curtainLabel.textContent = label.trim();
	gsap.fromTo(curtain, { yPercent: 0 }, {
		yPercent: -100, duration: 0.9, ease: 'expo.inOut', delay: 0.15,
		onComplete: () => { root.classList.remove('arriving'); gsap.set(curtain, { yPercent: 100 }); },
	});
}
window.addEventListener('pageshow', (e) => {
	if (e.persisted && curtain) { root.classList.remove('arriving'); curtain.classList.remove('is-active'); gsap.set(curtain, { yPercent: 100 }); }
});

/* ---------- smooth scrolling ---------- */
const smoother = motion
	? ScrollSmoother.create({ wrapper: '#smooth-wrapper', content: '#smooth-content', smooth: 1.1, effects: true, smoothTouch: false })
	: null;

document.addEventListener('click', (e) => {
	const a = (e.target as Element).closest<HTMLAnchorElement>('a[href]');
	if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
	const url = new URL(a.href, location.href);
	if (url.origin !== location.origin || a.target === '_blank' || a.hasAttribute('download')) return;
	if (url.pathname === location.pathname && url.hash) {
		const target = $(url.hash);
		if (smoother && target) {
			e.preventDefault();
			smoother.scrollTo(target, true, 'top top');
			history.pushState(null, '', url.hash);
		}
		return;
	}
	if (!motion || url.pathname === location.pathname) return;
	e.preventDefault();
	leave(url.href, a.dataset.curtain ?? '');
});

/* ---------- cursor and magnetic controls ---------- */
if (motion && fine) {
	const cursor = $('.cursor');
	const label = $('.cursor__label');
	if (cursor && label) {
		root.classList.add('has-cursor');
		const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
		const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
		let mode = '';
		const setMode = (m: string) => {
			if (m === mode) return;
			mode = m;
			gsap.to(cursor, { scale: m === 'view' ? 1 : m === 'link' ? 0.32 : 0.15, duration: 0.45, ease: EASE, overwrite: 'auto' });
			gsap.to(label, { opacity: m === 'view' ? 1 : 0, duration: 0.25, overwrite: 'auto' });
		};
		gsap.set(cursor, { x: -100, y: -100 });
		window.addEventListener('pointermove', (e) => {
			xTo(e.clientX); yTo(e.clientY);
			const t = e.target as Element;
			cursor.classList.toggle('on-panel', !!t.closest('[data-panel]'));
			setMode(t.closest('[data-cursor="view"]') ? 'view' : t.closest('a, button') ? 'link' : '');
		}, { passive: true });
		document.addEventListener('pointerleave', () => gsap.to(cursor, { scale: 0, duration: 0.3 }));
		document.addEventListener('pointerenter', () => { mode = '-'; setMode(''); });
	}
	$$('[data-magnetic]').forEach((el) => {
		const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
		const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
		el.addEventListener('pointermove', (e) => {
			const r = el.getBoundingClientRect();
			xTo((e.clientX - (r.left + r.width / 2)) * 0.28);
			yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
		});
		el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
	});
	$$('[data-tilt]').forEach((zone) => {
		const target = $('[data-tilt-target]', zone);
		if (!target) return;
		const rx = gsap.quickTo(target, 'rotationX', { duration: 0.8, ease: 'power3' });
		const ry = gsap.quickTo(target, 'rotationY', { duration: 0.8, ease: 'power3' });
		zone.addEventListener('pointermove', (e) => {
			const r = zone.getBoundingClientRect();
			ry(((e.clientX - r.left) / r.width - 0.5) * 16);
			rx(-((e.clientY - r.top) / r.height - 0.5) * 12);
		});
		zone.addEventListener('pointerleave', () => { rx(0); ry(0); });
	});
}

/* ---------- sketch to shipped (case pages) ---------- */
type Plot = { el: HTMLElement; tl: gsap.core.Timeline | null; st: ScrollTrigger | null };
const plots: Plot[] = $$('[data-plot]').map((el) => ({ el, tl: null, st: null }));
const setState = (p: Plot, state: 'sketch' | 'shipped') => {
	p.el.dataset.state = state;
	p.el.querySelectorAll<HTMLButtonElement>('[data-to]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.to === state)));
};
function buildPlot(p: Plot, mode: 'load' | 'scroll' | 'manual') {
	const wire = $('.device__wire', p.el);
	const shot = $('.device__shot', p.el);
	const scan = $('.device__scan', p.el);
	const notes = $$('.note', p.el);
	const sketchOnly = p.el.hasAttribute('data-sketch-only');
	const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
	if (shot) tl.set(shot, { clipPath: 'inset(0% 0% 100% 0%)' }, 0);
	tl.set(wire, { clipPath: 'inset(0% 0% 100% 0%)', opacity: 1 }, 0)
		.set(scan, { opacity: 1 }, 0)
		.set(notes, { opacity: 0 }, 0)
		.addLabel('start')
		.to(wire, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, 'start')
		.fromTo(scan, { top: '0%' }, { top: '100%', duration: 1 }, 'start')
		.to(notes, { opacity: 1, duration: 0.15, stagger: 0.12 }, 'start+=0.35')
		.addLabel('sketch');
	if (shot) {
		tl.fromTo(scan, { top: '0%' }, { top: '100%', duration: 1, immediateRender: false }, 'sketch+=0.25')
			.to(shot, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, 'sketch+=0.25')
			.to(wire, { opacity: 0, duration: 0.4 }, 'sketch+=1.05');
	}
	tl.to(scan, { opacity: 0, duration: 0.1 }).addLabel('shipped');
	if (!sketchOnly) tl.eventCallback('onUpdate', () => setState(p, tl.time() < tl.labels.sketch + 0.6 ? 'sketch' : 'shipped'));
	p.tl = tl;
	if (mode === 'manual') {
		tl.time(0);
	} else if (mode === 'load') {
		tl.time(0);
		gsap.delayedCall(root.classList.contains('arriving') ? 1 : 0.35, () => tl.tweenTo(sketchOnly ? 'sketch' : 'shipped', { duration: 3.2, ease: 'power1.inOut' }));
	} else if (sketchOnly) {
		tl.time(0);
		p.st = ScrollTrigger.create({ trigger: p.el, start: 'top 85%', end: 'center 60%', scrub: 0.6, animation: tl.tweenFromTo('start', 'sketch', { paused: true }) });
	} else {
		tl.time(tl.labels.sketch);
		p.st = ScrollTrigger.create({ trigger: p.el, start: 'top 80%', end: 'center 55%', scrub: 0.6, animation: tl.tweenFromTo('sketch', 'shipped', { paused: true }) });
	}
}
plots.forEach((p) => {
	$$<HTMLButtonElement>('[data-to]', p.el).forEach((b) => b.addEventListener('click', () => {
		const to = b.dataset.to as 'sketch' | 'shipped';
		if (p.st) { p.st.kill(); p.st = null; }
		if (p.tl) p.tl.tweenTo(to, { duration: 0.9, ease: 'power2.inOut' });
		else setState(p, to);
	}));
});

/* ---------- reduced motion: final states only ---------- */
if (!motion) {
	plots.forEach((p) => { if (!p.el.hasAttribute('data-sketch-only')) setState(p, 'shipped'); });
} else {
	const start = () => {
		/* hero: each line rises out of its own mask as one piece (crisp, no per-letter 3D), then the
		   headline drifts up and fades as you scroll. The letter stretch lives on in the footer (Say hi.) */
		const heroTitle = $('[data-hero-title]');
		const hero = $('[data-hero]');
		const arriving = root.classList.contains('arriving');
		if (heroTitle && hero) {
			gsap.set(heroTitle, { visibility: 'visible' });
			gsap.from($$('.hero__in', heroTitle), { yPercent: 135, duration: 1.1, ease: EASE, stagger: 0.12, delay: arriving ? 0.7 : 0.15 });
			gsap.from('[data-hero-foot] > *', { y: 28, opacity: 0, duration: 1, ease: EASE, stagger: 0.1, delay: arriving ? 1.1 : 0.6 });
			gsap.to(heroTitle, { y: () => -0.12 * innerHeight, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
			gsap.to(heroTitle, { opacity: 0, ease: 'power1.in', scrollTrigger: { trigger: hero, start: '20% top', end: '85% top', scrub: true } });
		}

		/* hero orbit: real work on two tilted rings turns around the headline; tiles fly in from deep
		   behind after the words build, and scrolling dollies the camera through them (after ArtCraft) */
		const orbit = $('[data-orbit]');
		if (orbit && hero) {
			const world = $('[data-orbit-world]', orbit)!;
			const arcs = $$<SVGElement>('[data-arc]', orbit);
			const vids = $$<HTMLVideoElement>('[data-tile-video]', orbit);
			const items = $$('[data-tile]', orbit)
				.filter((el) => getComputedStyle(el).display !== 'none')
				.map((el) => ({ el, ring: Number(el.dataset.ring), a: Number(el.dataset.a), y: Number(el.dataset.y), wire: el.classList.contains('orbit__tile--wire'), k: 0, q: 1, w: 0, h: 0, bob: Math.random() * 6.28 }));
			const cam = { z: 0, spread: 1 };
			const PERSP = 1100;
			const TILT = (10 * Math.PI) / 180;
			// the words' box and the perspective origin, relative to the ring centre (measured, not animated)
			const words = { l: 0, r: 0, t: 0, b: 0, py: 0 };
			const measure = () => {
				const o = world.getBoundingClientRect();
				const box = [$('[data-hero-title]', hero), $('[data-hero-foot]', hero)].map((e) => e!.getBoundingClientRect());
				const pad = 18;
				words.l = Math.min(...box.map((b) => b.left)) - o.left - pad;
				words.r = Math.max(...box.map((b) => b.right)) - o.left + pad;
				words.t = Math.min(...box.map((b) => b.top)) - o.top - pad;
				words.b = Math.max(...box.map((b) => b.bottom)) - o.top + pad;
				words.py = orbit.getBoundingClientRect().top + orbit.clientHeight * 0.4 - o.top;
				items.forEach((it) => { it.w = it.el.offsetWidth; it.h = it.el.offsetHeight; });
			};
			measure();
			window.addEventListener('resize', measure);
			let running = true;
			const t0 = performance.now();
			const tick = () => {
				if (!running) return;
				const t = (performance.now() - t0) / 1000;
				const W = innerWidth / 100, H = innerHeight / 100;
				for (const it of items) {
					const r = rings[it.ring];
					const ang = ((it.a + r.speed * t) * Math.PI) / 180;
					const x = r.rx * W * Math.sin(ang) * cam.spread;
					const z = r.rz * W * Math.cos(ang) * cam.spread + cam.z - (1 - it.k) * 2200;
					const y = it.y * H * cam.spread + Math.sin(t * 0.7 + it.bob) * 6;
					// where the tile lands on screen: the world's tilt, then perspective from the origin
					const yc = y * Math.cos(TILT) + z * Math.sin(TILT);
					const zc = z * Math.cos(TILT) - y * Math.sin(TILT);
					const s = PERSP / Math.max(1, PERSP - zc);
					const sx = x * s, sy = words.py + (yc - words.py) * s;
					const hw = (it.w * s) / 2, hh = (it.h * s) / 2;
					// tiles go quiet while they pass behind the words: a clean dim, no veil over them
					const hit = sx + hw > words.l && sx - hw < words.r && sy + hh > words.t && sy - hh < words.b;
					it.q += ((hit ? (root.dataset.theme === 'light' ? 0.08 : 0.2) : 1) - it.q) * 0.12;
					let o = (it.wire ? 0.9 : 0.3 + 0.7 * ((Math.cos(ang) + 1) / 2)) * it.k * it.q;
					if (zc > PERSP * 0.4) o *= Math.max(0, 1 - (zc - PERSP * 0.4) / (PERSP * 0.35));
					it.el.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) rotateX(10deg)`;
					it.el.style.opacity = o.toFixed(3);
					it.el.style.visibility = o < 0.01 ? 'hidden' : '';
				}
				arcs.forEach((a) => { a.style.strokeDashoffset = String(-((Number(a.dataset.speed) * t) / 360) * 100); });
			};
			gsap.ticker.add(tick);
			const d1 = arriving ? 1.1 : 0.55;
			gsap.to(items, { k: 1, duration: 2.2, ease: 'expo.out', stagger: { each: 0.06, from: 'random' }, delay: d1 });
			gsap.from($$('.orbit__rings g', orbit), { scale: 0.6, opacity: 0, transformOrigin: '50% 50%', duration: 2, ease: EASE, stagger: 0.15, delay: d1 });
			const play = (on: boolean) => vids.forEach((v) => (on ? v.play().catch(() => {}) : v.pause()));
			gsap.delayedCall(d1 + 1.2, () => running && play(true));
			ScrollTrigger.create({ trigger: hero, start: 'top top', end: 'bottom top', onToggle: (self) => { running = self.isActive; play(self.isActive); } });
			gsap.to(cam, { z: 1600, spread: 1.35, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
			if (fine) {
				gsap.set(world, { rotationX: -10 });
				const rx = gsap.quickTo(world, 'rotationX', { duration: 1.4, ease: 'power3' });
				const ry = gsap.quickTo(world, 'rotationY', { duration: 1.4, ease: 'power3' });
				hero.addEventListener('pointermove', (e) => { ry((e.clientX / innerWidth - 0.5) * 10); rx(-10 - (e.clientY / innerHeight - 0.5) * 6); });
			}
		}

		/* ticker: always running, faster with scroll speed, reverses with scroll direction */
		const row = $('[data-ticker-row]');
		if (row) {
			const loop = gsap.to(row, { xPercent: -50, ease: 'none', duration: 36, repeat: -1 });
			loop.totalTime(36 * 50);
			ScrollTrigger.create({
				onUpdate: (self) => {
					const speed = 1 + Math.min(Math.abs(self.getVelocity()) / 350, 7);
					gsap.timeline({ overwrite: true })
						.to(loop, { timeScale: self.direction * speed, duration: 0.2 })
						.to(loop, { timeScale: self.direction, duration: 1.2, ease: 'power2.out' });
				},
			});
		}

		/* statement: words light up as you read */
		const words = $('[data-words]');
		if (words) {
			const s = SplitText.create(words, { type: 'words' });
			gsap.fromTo(s.words, { opacity: 0.16 }, { opacity: 1, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: words, start: 'top 82%', end: 'bottom 48%', scrub: true } });
		}

		/* headings: four moves, not one entrance everywhere */
		// rise: letters come up out of their line (Selected work, About)
		$$('[data-split]').forEach((el) => {
			const s = SplitText.create(el, { type: 'lines,chars', mask: 'lines' });
			gsap.from(s.chars, { yPercent: 110, duration: 1, ease: EASE, stagger: 0.022, scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
		});
		// wipe: the heading is uncovered left to right with the scroll (How I work, sites, case sections)
		$$('[data-wipe]').forEach((el) => {
			gsap.fromTo(el, { clipPath: 'inset(-15% 100% -15% 0%)' }, { clipPath: 'inset(-15% 0% -15% 0%)', ease: 'none', scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 60%', scrub: true } });
		});
		// grow: letters grow up from the baseline one by one (2013 to now)
		$$('[data-grow]').forEach((el) => {
			const s = SplitText.create(el, { type: 'chars' });
			gsap.fromTo(s.chars, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, ease: 'none', stagger: 0.06, scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 55%', scrub: true } });
		});
		// unstretch: the closing line arrives stretched and settles, the hero move in reverse (Say hi.)
		$$('[data-unstretch]').forEach((el) => {
			const s = SplitText.create($('[data-fit-text]', el) ?? el, { type: 'chars' });
			fitType();
			gsap.fromTo(s.chars, { scaleY: 2.6, yPercent: -30, transformOrigin: '50% 100%' }, { scaleY: 1, yPercent: 0, ease: 'none', stagger: { each: 0.03, from: 'center' }, scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 45%', scrub: true } });
		});

		/* chapters: the panel opens from a card to full bleed, the phone swings in, then the reel plays */
		const mm = gsap.matchMedia();
		mm.add({ desk: '(min-width: 901px)', mobile: '(max-width: 900px)' }, (ctx) => {
			const { desk: isDesk } = ctx.conditions as { desk: boolean };
			$$('[data-chapter]').forEach((ch) => {
				const panel = $('[data-panel]', ch)!;
				const text = $('[data-chapter-text]', ch);
				const phone = $('[data-phone]', ch);
				const pic = $('[data-pic]', ch);
				const shots = $$('[data-shot]', ch);
				const wire = $('[data-wire]', ch);
				const flip = ch.classList.contains('chapter--flip');
				const band = $('[data-band]', ch);
				const enter = { trigger: ch, start: 'top bottom', end: isDesk ? 'top top' : 'top 15%', scrub: true };
				gsap.fromTo(panel, { clipPath: isDesk ? 'inset(12% 9% 12% 9% round 32px)' : 'inset(4% 4% 4% 4% round 20px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: enter });
				if (text) gsap.fromTo(text, { y: 120 }, { y: 0, ease: 'none', scrollTrigger: enter });
				if (phone) gsap.fromTo(phone, { rotationY: flip ? 44 : -44, rotationX: 24, yPercent: 24, scale: 0.86 }, { rotationY: flip ? 14 : -14, rotationX: 6, yPercent: 0, scale: 1, ease: 'none', scrollTrigger: enter });
				if (pic) gsap.fromTo(pic, { rotationY: -30, rotationX: 18, scale: 0.8, yPercent: 16 }, { rotationY: -8, rotationX: 4, scale: 1, yPercent: 0, ease: 'none', scrollTrigger: enter });
				if (band) gsap.fromTo(band, { yPercent: 80 }, { yPercent: 0, ease: 'none', scrollTrigger: enter });

				const tl = gsap.timeline({ defaults: { ease: 'none' } });
				if (shots.length > 1) {
					gsap.set(shots.slice(1), { yPercent: 100 });
					shots.slice(1).forEach((s, i) => {
						tl.to(s, { yPercent: 0, duration: 1, ease: 'power2.inOut' }, i * 1.25)
							.to(phone, { rotationY: (flip ? 1 : -1) * (i % 2 ? 14 : 4), rotationZ: i % 2 ? 1.5 : -1.5, duration: 1, ease: 'power2.inOut' }, i * 1.25);
					});
				}
				if (wire) tl.fromTo(wire, { clipPath: 'inset(0% 0% 62% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 2 }, 0);
				if (pic) tl.to(pic, { rotationY: 6, duration: 1.5 }, 0);
				// the project's name or number drifts across the panel while it is pinned
				if (band) tl.fromTo(band, { xPercent: 3 }, { xPercent: -14, duration: Math.max(tl.duration(), 1.5) }, 0);
				const long = ch.hasAttribute('data-long');
				ScrollTrigger.create({
					trigger: ch, start: isDesk ? 'top top' : 'top 40%',
					end: () => (isDesk ? `+=${Math.round(innerHeight * (long ? 1.4 : 0.7))}` : 'bottom 30%'),
					pin: isDesk, scrub: 0.6, animation: tl, invalidateOnRefresh: true,
				});
			});
		});

		/* rolling numbers */
		rolls.filter((r) => !r.el.closest('[data-case-cover]')).forEach((r) => rollOnView(r));
		$$('[data-metric]').forEach((m) => {
			const strike = $('s', m);
			if (strike) gsap.fromTo(strike, { '--strike': 0 }, { '--strike': 1, duration: 0.7, ease: EASE, scrollTrigger: { trigger: m, start: 'top 75%', once: true } });
		});

		/* how I work: the big words drift in from alternate sides */
		$$('[data-drift]').forEach((w, i) => {
			gsap.fromTo(w, { xPercent: i % 2 ? -28 : 28 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: w, start: 'top bottom', end: 'top 35%', scrub: true } });
		});

		/* 2013 to now: pinned, the track runs sideways and the bar fills */
		const track = $('[data-track]');
		const frame = $('[data-track-frame]');
		const fill = $('[data-track-fill]');
		mm.add('(min-width: 901px)', () => {
			if (!track || !frame) return;
			const dist = () => Math.max(0, track.scrollWidth - frame.clientWidth);
			const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: frame.closest('section'), start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: 0.5, invalidateOnRefresh: true } });
			tl.to(track, { x: () => -dist() }, 0);
			if (fill) tl.fromTo(fill, { scaleX: 0 }, { scaleX: 1 }, 0);
		});

		/* about: the portrait opens up */
		const portrait = $('[data-portrait]');
		if (portrait) {
			const img = $('img', portrait);
			gsap.fromTo(portrait, { clipPath: 'inset(18% 14% 18% 14% round 18px)' }, { clipPath: 'inset(0% 0% 0% 0% round 18px)', ease: 'none', scrollTrigger: { trigger: portrait, start: 'top bottom', end: 'center center', scrub: true } });
			if (img) gsap.fromTo(img, { scale: 1.3 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: portrait, start: 'top bottom', end: 'bottom top', scrub: true } });
		}

		/* case pages: devices in the story plot as they scroll in */
		plots.filter((p) => !p.el.closest('[data-case-cover]')).forEach((p) => buildPlot(p, 'scroll'));

		/* case cover: arrive after the curtain, then one pinned beat where the name stretches away
		   and the work takes the stage (ATHLIQ ships from sketch, adidas finishes plotting, Happy Italy lays flat) */
		const cover = $('[data-case-cover]');
		if (cover) {
			const mast = $('[data-mast]', cover)!;
			const mastText = $('[data-fit-text]', mast) ?? mast;
			const star = $('[data-star]', cover)!;
			const tilt = $('[data-star-tilt]', cover)!;
			const lineEls = $$('[data-lines] > *', cover);
			const struck = $('[data-struck]', cover);
			const d0 = arriving ? 0.75 : 0.2;
			const hasRoll = !!$('[data-roll]', mast);
			const chars: Element[] = hasRoll ? [mastText] : SplitText.create(mastText, { type: 'chars', charsClass: 'hc' }).chars;
			fitType(); // splitting drops kerning, so fit again
			gsap.set(mast, { visibility: 'visible', perspective: 900 });
			gsap.from(chars, { yPercent: 110, rotationX: -80, opacity: 0, transformOrigin: '50% 100%', duration: 1.1, ease: EASE, stagger: 0.035, delay: d0 });
			if (struck) gsap.fromTo($('s', struck), { '--strike': 0 }, { '--strike': 1, duration: 0.8, ease: EASE, delay: d0 + 0.6 });
			gsap.from(tilt, { yPercent: 30, rotationX: 40, opacity: 0, duration: 1.5, ease: EASE, delay: d0 + 0.2 });
			gsap.from(lineEls, { y: 32, opacity: 0, duration: 1, ease: EASE, stagger: 0.08, delay: d0 + 0.45 });
			rolls.filter((r) => r.el.closest('[data-case-cover]')).forEach((r, i) => playRoll(r, d0 + 0.3 + i * 0.1));

			const plot = plots.find((p) => p.el.closest('[data-case-cover]'));
			if (plot) buildPlot(plot, 'manual');
			const ptl = plot?.tl ?? null;
			const sketchOnly = !!plot?.el.hasAttribute('data-sketch-only');
			const from = ptl ? ptl.labels.sketch : 0;
			const to = ptl && !sketchOnly ? ptl.labels.shipped : from;
			let intro: gsap.core.Tween | null = ptl ? ptl.tweenTo(from, { duration: 1.8, ease: 'power1.inOut', delay: d0 + 0.35 }) : null;
			const proxy = { p: 0 };
			// adidas: the bulk scan runs on the redrawn screen, a stopwatch to 1:30 while three rows tick off
			const timer = $('[data-timer]', cover);
			const ticks = $$('[data-tick]', cover);
			const ticked = ticks.map(() => true);
			const scan = (p: number) => {
				if (!timer) return;
				const s = Math.round(90 * Math.min(1, p / 0.9));
				timer.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
				ticks.forEach((t, i) => {
					const on = p >= 0.2 + i * 0.25;
					if (on === ticked[i]) return;
					ticked[i] = on;
					gsap.to(t, { scale: on ? 1 : 0, duration: on ? 0.45 : 0.2, ease: on ? 'back.out(2.4)' : 'power2.in' });
				});
			};
			if (timer) { gsap.set(ticks, { scale: 0 }); ticked.fill(false); scan(0); }
			const drive = () => {
				scan(proxy.p);
				if (!ptl) return;
				if (proxy.p > 0.001 && intro) { intro.kill(); intro = null; }
				if (!intro) ptl.time(from + (to - from) * proxy.p);
			};

			mm.add({ desk: '(min-width: 901px)', mobile: '(max-width: 900px)' }, (ctx) => {
				const { desk: isDesk } = ctx.conditions as { desk: boolean };
				if (!isDesk) {
					ScrollTrigger.create({ trigger: cover, start: 'top top', end: 'bottom 30%', scrub: 0.6, onUpdate: (self) => { proxy.p = self.progress; drive(); } });
					return;
				}
				const dx = () => cover.clientWidth / 2 - (star.offsetLeft + star.offsetWidth / 2);
				const dy = () => cover.clientHeight / 2 - (star.offsetTop + star.offsetHeight / 2);
				const beat = gsap.timeline({
					defaults: { ease: 'none' },
					scrollTrigger: { trigger: cover, start: 'top top', end: () => `+=${Math.round(innerHeight * 0.9)}`, pin: true, scrub: 0.6, invalidateOnRefresh: true },
				});
				beat.to(chars, { scaleY: 2.4, yPercent: -24, opacity: 0, transformOrigin: '50% 100%', stagger: { each: 0.02, from: 'center' }, duration: 0.7 }, 0)
					.to(lineEls, { opacity: 0, y: 28, duration: 0.35, stagger: 0.05 }, 0)
					.to(star, { x: dx, y: dy, scale: sketchOnly ? 1.1 : 1.14, duration: 1 }, 0)
					.to(tilt, { rotationX: 0, rotationY: 0, rotationZ: 0, duration: 1 }, 0)
					.fromTo(proxy, { p: 0 }, { p: 1, duration: 0.85, onUpdate: drive }, 0.15);
				if (struck) beat.to(struck, { opacity: 0, yPercent: -60, duration: 0.5 }, 0);
			});
		}

		/* section bars: the rule draws in, ticks land on the frame lines, the bar holds the top while you
		   are in its section and the next one takes over; the lime foot fills with your progress */
		$$('[data-secbar]').forEach((bar) => {
			const sec = bar.parentElement!;
			const spacer = sec.parentElement?.classList.contains('pin-spacer') ? sec.parentElement : null;
			const span = spacer ?? sec;
			const rule = $('[data-secbar-rule]', bar);
			const fill = $('[data-secbar-fill]', bar);
			const labels = $$('[data-secbar-label]', bar);
			const ticks = $$('.secbar__tick', bar);
			// ScrollSmoother moves the page with a transform, which stops position: sticky; pin instead.
			// A section that pins itself (the timeline) already carries its bar.
			if (smoother) bar.classList.add('secbar--pinned');
			if (smoother && !spacer && !bar.closest('.end')) {
				ScrollTrigger.create({ trigger: sec, start: 'top top', end: () => `bottom top+=${bar.offsetHeight}`, pin: bar, pinSpacing: false, refreshPriority: -1 });
			}
			// over a colour chapter the bar takes the chapter's colours, like the footer's bar
			$$('[data-chapter]', sec).forEach((ch) => {
				const zone = ch.parentElement?.classList.contains('pin-spacer') ? ch.parentElement : ch;
				const on = (yes: boolean) => {
					if (!yes) { bar.removeAttribute('data-on-panel'); return; }
					const cs = getComputedStyle(ch);
					bar.style.setProperty('--bar-panel', cs.getPropertyValue('--panel').trim());
					bar.style.setProperty('--bar-ink', cs.getPropertyValue('--on-panel').trim());
					bar.setAttribute('data-on-panel', '');
				};
				ScrollTrigger.create({ trigger: zone, start: () => `top top+=${bar.offsetHeight}`, end: () => `bottom top+=${bar.offsetHeight}`, refreshPriority: -1, onToggle: (self) => on(self.isActive) });
			});
			if (rule) gsap.fromTo(rule, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: span, start: 'top bottom', end: 'top 55%', scrub: true } });
			gsap.from(ticks, { scale: 0, rotation: -90, duration: 0.6, ease: EASE, stagger: 0.08, scrollTrigger: { trigger: span, start: 'top 70%', once: true } });
			gsap.from(labels, { yPercent: 120, opacity: 0, duration: 0.8, ease: EASE, stagger: 0.08, scrollTrigger: { trigger: span, start: 'top 70%', once: true } });
			if (fill) gsap.fromTo(fill, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: span, start: 'top top', end: 'bottom top', scrub: true, refreshPriority: -1 } });
		});

		ScrollTrigger.refresh();
	};
	const fonts = document.fonts?.ready ?? Promise.resolve();
	Promise.race([fonts, new Promise((r) => setTimeout(r, 1500))]).then(start);
}

// Pause work when the tab is hidden.
document.addEventListener('visibilitychange', () => (document.hidden ? gsap.globalTimeline.pause() : gsap.globalTimeline.resume()));
