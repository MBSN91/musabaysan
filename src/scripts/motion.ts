// Motion for musabaysan.nl. One authored moment: each device is plotted as a dotted sketch, then printed
// as the shipped screen. Everything else is quiet. Content is visible without script; reduced motion gets
// no travel, only the Sketch/Shipped switch. Emil's rules: one ease-out curve, transform/opacity/clip only.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const root = document.documentElement;
const EASE = 'expo.out';

/* ---------- theme toggle ---------- */
const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const syncToggle = () => {
	const dark = root.dataset.theme === 'dark';
	toggle?.setAttribute('aria-pressed', String(dark));
	toggle?.setAttribute('aria-label', dark ? 'Light theme' : 'Dark theme');
};
syncToggle();
toggle?.addEventListener('click', () => {
	root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
	try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
	syncToggle();
});

/* ---------- devices: sketch to shipped ---------- */
type Plot = { el: HTMLElement; tl: gsap.core.Timeline | null; st: ScrollTrigger | null };
const plots: Plot[] = [...document.querySelectorAll<HTMLElement>('[data-plot]')].map((el) => ({ el, tl: null, st: null }));

const setState = (p: Plot, state: 'sketch' | 'shipped') => {
	p.el.dataset.state = state;
	p.el.querySelectorAll<HTMLButtonElement>('[data-to]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.to === state)));
};

function build(p: Plot, mode: 'load' | 'scroll') {
	const wire = p.el.querySelector('.device__wire');
	const shot = p.el.querySelector('.device__shot');
	const scan = p.el.querySelector('.device__scan');
	const notes = p.el.querySelectorAll('.note');
	const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
	tl.set(shot, { clipPath: 'inset(0% 0% 100% 0%)' })
		.set(wire, { clipPath: 'inset(0% 0% 100% 0%)', opacity: 1 })
		.set(scan, { opacity: 1 })
		.set(notes, { opacity: 0 })
		.addLabel('start')
		// pass 1: the plotter draws the sketch
		.to(wire, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, 'start')
		.fromTo(scan, { top: '0%' }, { top: '100%', duration: 1 }, 'start')
		.to(notes, { opacity: 1, duration: 0.15, stagger: 0.12 }, 'start+=0.35')
		.addLabel('sketch')
		// pass 2: the shipped screen prints over it
		.fromTo(scan, { top: '0%' }, { top: '100%', duration: 1, immediateRender: false }, 'sketch+=0.25')
		.to(shot, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, 'sketch+=0.25')
		.to(wire, { opacity: 0, duration: 0.4 }, 'sketch+=1.05')
		.to(scan, { opacity: 0, duration: 0.1 })
		.addLabel('shipped');
	if (!p.el.hasAttribute('data-sketch-only')) tl.eventCallback('onUpdate', () => {
		const t = tl.time();
		p.el.dataset.state = t < tl.labels.sketch + 0.6 ? 'sketch' : 'shipped';
		setState(p, p.el.dataset.state as 'sketch' | 'shipped');
	});
	p.tl = tl;
	const sketchOnly = p.el.hasAttribute('data-sketch-only');
	if (mode === 'load') {
		tl.time(0);
		gsap.delayedCall(0.25, () => tl.tweenTo('shipped', { duration: 3.2, ease: 'power1.inOut' }));
	} else if (sketchOnly) {
		// confidential work: only the sketch is plotted
		tl.time(0);
		p.st = ScrollTrigger.create({ trigger: p.el, start: 'top 85%', end: 'center 62%', scrub: 0.6, animation: tl.tweenFromTo('start', 'sketch', { paused: true }) });
	} else {
		// already sketched when it scrolls in, so the field is never empty; scrolling prints the shipped screen
		tl.time(tl.labels.sketch);
		p.st = ScrollTrigger.create({ trigger: p.el, start: 'top 80%', end: 'center 55%', scrub: 0.6, animation: tl.tweenFromTo('sketch', 'shipped', { paused: true }) });
	}
}

const mm = gsap.matchMedia();
mm.add({ motion: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' }, (ctx) => {
	const { motion } = ctx.conditions as { motion: boolean };
	if (!motion) {
		plots.forEach((p) => setState(p, 'shipped'));
		return;
	}
	plots.forEach((p) => build(p, p.el.id === 'hero-device' ? 'load' : 'scroll'));

	// adidas: the old time is struck through, the new one counts down into place
	document.querySelectorAll<HTMLElement>('[data-metric]').forEach((m) => {
		const strike = m.querySelector('s');
		const num = m.querySelector<HTMLElement>('[data-count]');
		const to = m.querySelector('.metric__to');
		const obj = { v: 8 };
		const tl = gsap.timeline({ scrollTrigger: { trigger: m, start: 'top 75%', once: true } });
		tl.fromTo(strike, { '--strike': 0 }, { '--strike': 1, duration: 0.6, ease: EASE })
			.fromTo(to, { y: 24 }, { y: 0, duration: 0.7, ease: EASE }, '-=0.2')
			.to(obj, { v: 1.5, duration: 1.1, ease: EASE, onUpdate: () => { if (num) num.textContent = obj.v.toFixed(1); } }, '<');
	});

	// 2013 to now: the track scrolls sideways while the section is pinned (wide screens only)
	const track = document.querySelector<HTMLElement>('[data-track]');
	const frame = document.querySelector<HTMLElement>('[data-track-frame]');
	if (track && frame && matchMedia('(min-width: 900px)').matches) {
		const dist = () => Math.max(0, track.scrollWidth - frame.clientWidth);
		gsap.to(track, {
			x: () => -dist(), ease: 'none',
			scrollTrigger: { trigger: frame, start: 'center center', end: () => `+=${dist()}`, pin: frame.closest('section'), scrub: 0.5, invalidateOnRefresh: true },
		});
	}

	return () => plots.forEach((p) => { p.st?.kill(); p.tl?.kill(); p.st = null; p.tl = null; });
});

/* ---------- Sketch / Shipped switch (works with and without motion) ---------- */
plots.forEach((p) => {
	p.el.querySelectorAll<HTMLButtonElement>('[data-to]').forEach((b) => b.addEventListener('click', () => {
		const to = b.dataset.to as 'sketch' | 'shipped';
		if (p.st) { p.st.kill(); p.st = null; }
		if (p.tl) {
			p.tl.tweenTo(to, { duration: 0.9, ease: 'power2.inOut' });
		} else {
			setState(p, to);
		}
	}));
});

// Pause work when the tab is hidden.
document.addEventListener('visibilitychange', () => (document.hidden ? gsap.globalTimeline.pause() : gsap.globalTimeline.resume()));
