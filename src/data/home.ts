// Home page and contact content. Built-in defaults and the CMS seed; pages read src/data/content.ts.
// Every fact comes from Musa's CV or facts he confirmed (see PRODUCT.md).
import type { Shot } from './work';

export type Bar = { label: string; meta: string };
export type HowVisual = Shot | { kind: 'phone'; img: string; alt: string };

export type Home = {
	seo: { title: string; description: string };
	hero: { lines: string[]; lead: string; cta: string };
	ticker: string[];
	statement: string;
	work: { bar: Bar; title: string };
	sites: { title: string; text: string; items: { img: string; alt: string; name: string; w: number; h: number }[] };
	how: { bar: Bar; title: string; rows: { word: string; text: string; visual?: HowVisual }[] };
	years: { bar: Bar; title: string; items: { year: string; title: string; text: string }[] };
	about: { bar: Bar; title: string; portrait: { img: string; alt: string; w: number; h: number }; paragraphs: string[]; extra?: Shot };
};

export type Contact = {
	bar: Bar;
	title: string;
	lead: string;
	email: string;
	linkedin: string;
	linkedinLabel: string;
	basedIn: string;
	small: string;
};

export const home: Home = {
	seo: {
		title: 'Musa Baysan, UX designer in Breda',
		description: 'UX designer in Breda. I design apps and build them. Since 2013 for startups, agencies and global brands, today at adidas.',
	},
	hero: {
		lines: ['I design apps', 'and build them.'],
		lead: 'Musa Baysan, UX designer in Breda. Store apps, my own app, web shops and websites, from research on the shop floor through Figma to working code.',
		cta: 'Email me',
	},
	ticker: ['Research on the shop floor', 'Flows and design systems in Figma', 'Apps in React Native', 'Sites in Astro', 'iPhone, iPad and web'],
	statement: 'Since 2013 I have designed for startups, agencies and global brands. Today I design the store app 30,000+ adidas employees work with, and I build my own app, ATHLIQ, from the first sketch to release.',
	work: { bar: { label: 'Work', meta: 'adidas · ATHLIQ · Happy Italy · websites' }, title: 'Selected work' },
	sites: {
		title: 'Websites for small businesses',
		text: 'From my own studio: research, design and the front-end code. A barber with online booking, a made-to-measure suit maker, a maker of high-end chairs, and the Bayee web shop on a headless CMS.',
		items: [
			{ img: '/img/site-barber.webp', alt: 'Barber website with online booking on laptop, tablet and phone', name: 'Barber with online booking', w: 1114, h: 668 },
			{ img: '/img/site-suits.webp', alt: 'Made-to-measure wedding suit website on laptop, tablet and phone', name: 'Made-to-measure suit maker', w: 1114, h: 668 },
		],
	},
	how: {
		bar: { label: 'Process', meta: 'Users · Business · Figma · Code' },
		title: 'How I work',
		rows: [
			{ word: 'Users', text: 'I test with the people who use the product, where they use it. Their workarounds show what to fix first.', visual: { kind: 'slot', label: 'You testing with a user', spec: '3:2, 3000 × 2000, daylight, phone in hand', ratio: '3 / 2' } },
			{ word: 'Business', text: 'Design also has to hit the business KPIs. I find the balance between what users need and what the business needs, and make sure product, development and legal all back the direction.' },
			{ word: 'Figma', text: 'Journeys, flows and design systems, from the first sketch to the developer handoff. iPhone, iPad and web.', visual: { kind: 'slot', label: 'An ATHLIQ flow in Figma', spec: '3:2, 3000 × 2000, zoomed out to a map of screens', ratio: '3 / 2' } },
			{ word: 'Code', text: 'I build what I design: ATHLIQ in React Native, this site in Astro, prototypes in the real codebase so teams can test the actual thing.', visual: { kind: 'phone', img: '/img/athliq-diary.webp', alt: 'ATHLIQ diary with calories and macros for the day' } },
		],
	},
	years: {
		bar: { label: 'Timeline', meta: 'Since 2013' },
		title: '2013 to now',
		items: [
			{ year: '2013', title: 'Digital designer', text: 'Campaigns, print, social and motion, after studying Communication & Multimedia Design.' },
			{ year: '2014', title: 'Own studio', text: 'Research, UX and UI for small businesses, and the front-end code to go with it.' },
			{ year: '2020', title: 'Happy Italy', text: 'UX designer for the guest app and website: research, usability tests, design system.' },
			{ year: '2021', title: 'adidas, store app', text: 'Started as a contractor on the app store employees work with.' },
			{ year: '2022', title: 'Manager UX Design', text: 'Joined adidas in-house, leading the UX of the store app.' },
			{ year: '2025', title: 'ATHLIQ', text: 'My own coaching app, designed and built end to end.' },
			{ year: 'Now', title: 'Digital Experience Designer', text: 'Still on the store app at adidas, and still building.' },
		],
	},
	about: {
		bar: { label: 'Profile', meta: 'Breda, the Netherlands' },
		title: 'About',
		portrait: { img: '/img/musa.webp', alt: 'Musa Baysan in a white T-shirt, outdoors in evening sun', w: 900, h: 900 },
		paragraphs: [
			'I studied Communication & Multimedia Design and started as a digital designer. From 2014 I ran my own studio, doing research, UX and UI for small businesses. Since 2021 I have been at adidas, where I design the app store employees work with every day.',
			'I work close to the code. I prototype in it, and I build my own products, like ATHLIQ, from the first sketch to release.',
			'My best insights come from the shop floor.',
		],
		extra: { kind: 'slot', label: 'Me in a minute', spec: 'Video, 16:9, 45 to 60 s, captions burned in, click to play', ratio: '16 / 9' },
	},
};

export const contact: Contact = {
	bar: { label: 'Contact', meta: 'hello@musabaysan.nl' },
	title: 'Say hi.',
	lead: 'Got a role or a project? Tell me what you are working on, and I will get back to you.',
	email: 'hello@musabaysan.nl',
	linkedin: 'https://www.linkedin.com/in/musabaysan',
	linkedinLabel: 'linkedin.com/in/musabaysan',
	basedIn: 'Breda, the Netherlands',
	small: '© 2026 Musa Baysan. Designed and built by me, in Astro.',
};
