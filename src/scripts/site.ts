// Motion for musabaysan.nl, "kinetic reel". GSAP with ScrollTrigger, ScrollSmoother and SplitText.
// Rules: content is readable without script; reduced motion gets no smoothing, pinning, splitting or
// travel, only final states; hover effects only for fine pointers; one ease-out curve family.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

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
function buildPlot(p: Plot, mode: 'load' | 'scroll') {
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
	if (mode === 'load') {
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
		/* hero: the headline builds itself, then stretches upward and lifts away as you scroll */
		const heroTitle = $('[data-hero-title]');
		const hero = $('[data-hero]');
		const arriving = root.classList.contains('arriving');
		if (heroTitle && hero) {
			const split = SplitText.create(heroTitle, { type: 'lines,chars', linesClass: 'hl', charsClass: 'hc' });
			gsap.set(heroTitle, { visibility: 'visible', perspective: 900 });
			gsap.from(split.chars, { yPercent: 115, rotationX: -80, opacity: 0, transformOrigin: '50% 100%', duration: 1.15, ease: EASE, stagger: 0.03, delay: arriving ? 0.7 : 0.15 });
			gsap.from('[data-hero-foot] > *', { y: 28, opacity: 0, duration: 1, ease: EASE, stagger: 0.1, delay: arriving ? 1.2 : 0.75 });
			gsap.to(split.chars, {
				scaleY: 2.6, y: (i) => -40 - (i % 7) * 14, transformOrigin: '50% 100%', ease: 'none', stagger: { each: 0.02, from: 'center' },
				scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
			});
			gsap.to(heroTitle, { opacity: 0, ease: 'power1.in', scrollTrigger: { trigger: hero, start: '20% top', end: '85% top', scrub: true } });
		}

		/* hero phone: swings in, then plays ATHLIQ screens on a loop while the hero is on screen */
		const heroPhone = $('[data-hero-phone]');
		if (heroPhone && hero && getComputedStyle(heroPhone).display !== 'none') {
			const phone = $('[data-phone]', heroPhone)!;
			const shots = $$('[data-shot]', heroPhone);
			gsap.from(phone, { rotationY: -70, rotationX: 30, yPercent: 40, opacity: 0, duration: 1.6, ease: EASE, delay: arriving ? 1 : 0.55 });
			gsap.to(phone, { yPercent: -28, rotationZ: 6, rotationY: -30, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
			gsap.set(shots.slice(1), { yPercent: 100 });
			let cur = 0, z = 1;
			const cycle = gsap.timeline({ repeat: -1, paused: true });
			const step = () => {
				const a = shots[cur], b = shots[(cur + 1) % shots.length];
				gsap.set(b, { zIndex: ++z, yPercent: 100 });
				gsap.to(b, { yPercent: 0, duration: 0.9, ease: 'expo.inOut' });
				gsap.to(a, { yPercent: -25, duration: 0.9, ease: 'expo.inOut' });
				cur = (cur + 1) % shots.length;
			};
			cycle.call(step, [], 2.4).to({}, { duration: 0.0001 }, 2.4);
			ScrollTrigger.create({ trigger: hero, start: 'top top', end: 'bottom top', onToggle: (self) => (self.isActive ? cycle.play() : cycle.pause()) });
			cycle.play();
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

		/* headings rise letter by letter out of their line */
		$$('[data-split]').forEach((el) => {
			const s = SplitText.create(el, { type: 'lines,chars', mask: 'lines' });
			gsap.from(s.chars, { yPercent: 110, duration: 1, ease: EASE, stagger: 0.022, scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
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
				const enter = { trigger: ch, start: 'top bottom', end: isDesk ? 'top top' : 'top 15%', scrub: true };
				gsap.fromTo(panel, { clipPath: isDesk ? 'inset(12% 9% 12% 9% round 32px)' : 'inset(4% 4% 4% 4% round 20px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: enter });
				if (text) gsap.fromTo(text, { y: 120 }, { y: 0, ease: 'none', scrollTrigger: enter });
				if (phone) gsap.fromTo(phone, { rotationY: flip ? 44 : -44, rotationX: 24, yPercent: 24, scale: 0.86 }, { rotationY: flip ? 14 : -14, rotationX: 6, yPercent: 0, scale: 1, ease: 'none', scrollTrigger: enter });
				if (pic) gsap.fromTo(pic, { rotationY: -30, rotationX: 18, scale: 0.8, yPercent: 16 }, { rotationY: -8, rotationX: 4, scale: 1, yPercent: 0, ease: 'none', scrollTrigger: enter });

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
				const long = ch.hasAttribute('data-long');
				ScrollTrigger.create({
					trigger: ch, start: isDesk ? 'top top' : 'top 40%',
					end: () => (isDesk ? `+=${Math.round(innerHeight * (long ? 1.4 : 0.7))}` : 'bottom 30%'),
					pin: isDesk, scrub: 0.6, animation: tl, invalidateOnRefresh: true,
				});
			});
		});

		/* rolling numbers */
		rolls.forEach((r) => rollOnView(r));
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

		/* case pages */
		plots.forEach((p) => buildPlot(p, p.el.id === 'cover-device' ? 'load' : 'scroll'));
		const cover = $('[data-cover]');
		if (cover) gsap.fromTo(cover, { clipPath: 'inset(8% 6% 8% 6% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: { trigger: cover, start: 'top bottom', end: 'top 20%', scrub: true } });

		ScrollTrigger.refresh();
	};
	const fonts = document.fonts?.ready ?? Promise.resolve();
	Promise.race([fonts, new Promise((r) => setTimeout(r, 1500))]).then(start);
}

// Pause work when the tab is hidden.
document.addEventListener('visibilitychange', () => (document.hidden ? gsap.globalTimeline.pause() : gsap.globalTimeline.resume()));
