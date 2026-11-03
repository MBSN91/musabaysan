// Case content for musabaysan.nl. Every fact comes from Musa's CV or facts he confirmed (see PRODUCT.md).
// `slot` entries are shots Musa still has to make; they render as labelled sketches until a file exists.
// These are the built-in defaults and the seed for the CMS. Pages read src/data/content.ts, which uses the
// published CMS content when a snapshot exists (scripts/pull-content.mjs) and falls back to this file.

export type Shot = { kind: 'device'; wire: string; img: string; alt: string }
	| { kind: 'image'; img: string; alt: string; w: number; h: number }
	| { kind: 'slot'; label: string; spec: string; ratio: string; blur?: boolean };

// The case cover: masthead, cover star, cover lines (see .impeccable/surfaces and the covers plan).
export type Cover = {
	mast: string;                       // set huge across the cover
	struck?: string;                    // a struck-through "before" above the masthead (adidas)
	title: string;                      // the outcome line, bottom-left
	lines: [string, string][];          // three facts, bottom-right; digits roll in
	star:
		| { kind: 'device'; wire: string; img?: string; alt: string; caption?: string; notes?: { text: string; x: number; y: number; side: 'l' | 'r' }[] }
		| { kind: 'comp'; img: string; alt: string; w: number; h: number };
};

// The case's chapter in the home reel. Numbers in [brackets] count up as they scroll in.
export type Chapter = {
	body: string;
	visual:
		| { kind: 'wire'; wire: string; alt: string; note?: string }
		| { kind: 'screens'; screens: { img: string; alt: string }[] }
		| { kind: 'image'; img: string; alt: string; w: number; h: number };
};

export type Section = { heading: string; body: string[]; shot?: Shot };

export type Case = {
	slug: string;
	name: string;
	title: string;            // outcome-first
	summary: string;
	field: string;            // CSS colour of the project's field
	ink: string;              // text colour on that field
	facts: [string, string][];
	front: Cover;
	chapter: Chapter;
	sections: Section[];
	closing?: Section;        // a last part without the alternating layout
};

export const cases: Case[] = [
	{
		slug: 'adidas-store-app',
		name: 'adidas store app',
		title: '1.5 minutes instead of 5 to 8',
		summary: 'The app 30,000+ adidas store employees work with every day. Testing on the shop floor found a workaround nobody upstream knew about; the native flow I pushed for cut the task to about 1.5 minutes in tests.',
		field: 'var(--lime)',
		ink: '#000000',
		facts: [
			['Role', 'UX designer, Manager UX Design from 2022, now Digital Experience Designer'],
			['Years', '2021 to now'],
			['Platform', 'iPhone and iPad, all markets'],
			['Worked with', 'Product, business, developers, retail UX designers, markets'],
		],
		front: {
			mast: '1.5 min',
			struck: '5 to 8 min',
			title: 'Bulk scanning in the adidas store app',
			lines: [['Used by', '30,000+ employees'], ['Measured', 'In store tests'], ['Years', '2021 to now']],
			star: { kind: 'device', wire: 'adidas-bulkscan', alt: 'Wireframe of a bulk-scan screen: a scan counter, a list of scanned items and a done button', caption: 'Redrawn as a wireframe. The real screens are confidential.' },
		},
		chapter: {
			body: 'The app 30,000+ adidas store employees work with every day. Testing on the shop floor found a workaround nobody upstream knew about; the native flow I pushed for cut bulk scanning to about 1.5 minutes in tests.',
			visual: { kind: 'wire', wire: 'adidas-bulkscan', alt: 'Wireframe of a bulk-scan screen: a scan counter, a list of scanned items and a done button', note: 'Redrawn as a wireframe. The real screens are confidential.' },
		},
		closing: {
			heading: 'What I can show in a call',
			body: ['The screens are confidential. In a call I walk you through the flows, the research and the decisions behind them.'],
			shot: { kind: 'slot', label: 'Bulk-scan flow, rebuilt as wireframes', spec: '3 screens, 1170 × 2532 each, greys only, no real data', ratio: '4 / 3', blur: true },
		},
		sections: [
			{
				heading: 'One app instead of many',
				body: [
					'Store employees used separate apps for stock, orders, membership and tasks. The store app brings them together for 30,000+ employees on iPhone and iPad.',
					'I built its design system and components together with the developers and the retail UX designers, so new features land in one consistent app.',
				],
				shot: { kind: 'slot', label: 'Design system, rebuilt', spec: '16:10, 2880 × 1800, components redrawn as greyscale wireframes, no real UI', ratio: '16 / 10' },
			},
			{
				heading: 'The workaround on the shop floor',
				body: [
					'In market discussions and hands-on testing in stores, I saw employees bulk-scanning with a workaround that product and business did not know about.',
					'I advocated for native mass scanning, even when it met resistance at first. In tests the flow went from 5 to 8 minutes to about 1.5.',
				],
				shot: { kind: 'slot', label: 'Hands scanning a shoebox', spec: '3:2, 3000 px wide, no faces, no brand marks', ratio: '3 / 2' },
			},
			{
				heading: 'Journey mapping that changed the scope',
				body: [
					'Mapping the in-store membership journey uncovered broken steps and incorrect emails. The scope changed from a screen to the whole journey.',
					'I brought business, privacy, legal, the product owner, the flagship app and CRM teams together. The fixes shipped within weeks, with wording aligned to what markets expect and what the law requires.',
				],
				shot: { kind: 'slot', label: 'Journey map, anonymised', spec: '3:2, 3000 px wide, redrawn steps only, no real text', ratio: '3 / 2' },
			},
		],
	},
	{
		slug: 'athliq',
		name: 'ATHLIQ',
		title: 'Designed and built by me',
		summary: 'For personal trainers and their clients: onboarding, training plans, live workout tracking and one score for the day. React Native, Dutch interface, in alpha with 20 active users.',
		field: 'var(--green)',
		ink: '#000000',
		facts: [
			['Role', 'Designer and developer'],
			['Years', '2025 to now'],
			['Platform', 'iOS and Android, React Native'],
			['Status', 'Alpha, not yet in the stores'],
		],
		front: {
			mast: 'ATHLIQ',
			title: 'Designed and built by me',
			lines: [['Years', '2025 to now'], ['Platform', 'iOS and Android'], ['Active users', '20']],
			star: {
				kind: 'device', wire: 'athliq-today', img: '/img/athliq-today.webp', alt: 'ATHLIQ home screen with a day score of 88 built from protein, sleep and steps',
				notes: [
					{ text: 'One score for the day', x: 50, y: 41, side: 'r' },
					{ text: 'Protein, sleep, steps', x: 75, y: 62, side: 'r' },
					{ text: 'Today’s workout, one tap', x: 94, y: 80, side: 'r' },
				],
			},
		},
		chapter: {
			body: 'An app for personal trainers and their clients: onboarding, training plans, live workout tracking and one score for the day. React Native, Dutch interface, in alpha with [20] active users.',
			visual: { kind: 'screens', screens: [
				{ img: '/img/athliq-today.webp', alt: 'ATHLIQ home screen with a day score of 88 built from protein, sleep and steps' },
				{ img: '/img/athliq-diary.webp', alt: 'ATHLIQ diary with calories and macros for the day' },
				{ img: '/img/athliq-player.webp', alt: 'ATHLIQ workout player for a full body schema with a superset of goblet squats' },
				{ img: '/img/athliq-recovery.webp', alt: 'ATHLIQ recovery screen with sleep, day and load scores' },
			] },
		},
		sections: [
			{
				heading: 'Made for the gym floor',
				body: [
					'Clients use ATHLIQ between sets: one hand, sweaty fingers, half their attention. The workout player keeps the next exercise, the reps and the weight in thumb reach.',
				],
				shot: { kind: 'device', wire: 'athliq-player', img: '/img/athliq-player.webp', alt: 'ATHLIQ workout player for a full body schema with a superset of goblet squats' },
			},
			{
				heading: 'One number for the day',
				body: [
					'The day score combines protein, sleep and steps into one number, so a client knows in a second how the day is going. Each part opens its own detail.',
				],
				shot: { kind: 'device', wire: 'athliq-recovery', img: '/img/athliq-recovery.webp', alt: 'ATHLIQ recovery screen with sleep, day and load scores' },
			},
			{
				heading: 'Designed in Figma, built in code',
				body: [
					'I designed the flows and screens, then built them myself in React Native and Expo, from the first sketch to the test release. Design decisions get tested in the real app, not in a prototype.',
				],
				shot: { kind: 'slot', label: 'Screen recording: workout player', spec: '9:16, 1080 × 1920, 12 to 15 s, muted loop plus poster', ratio: '9 / 16' },
			},
		],
	},
	{
		slug: 'happy-italy',
		name: 'Happy Italy',
		title: 'Ordering and loyalty in one app',
		summary: 'A guest app for ordering with a built-in loyalty system, plus a redesigned website. Research and usability tests shaped the ordering journey; I set up the design system with the external developers.',
		field: 'var(--panel-3)',
		ink: 'var(--on-panel-3)',
		facts: [
			['Role', 'UX designer'],
			['Years', '2020 to 2021'],
			['Platform', 'iOS, Android and web'],
			['Worked with', 'Stakeholders, external development team'],
		],
		front: {
			mast: 'Happy Italy',
			title: 'Ordering and loyalty in one app',
			lines: [['Years', '2020 to 2021'], ['Platform', 'iOS, Android and web'], ['Role', 'UX designer']],
			star: { kind: 'comp', img: '/img/happy-italy.webp', alt: 'Five Happy Italy app screens: menu, coupons, loyalty points and ordering', w: 1035, h: 613 },
		},
		chapter: {
			body: 'A guest app for ordering with a built-in loyalty system, plus a redesigned website. Research and usability tests shaped the ordering journey; I set up the design system with the external developers.',
			visual: { kind: 'image', img: '/img/happy-italy.webp', alt: 'Five Happy Italy app screens: menu, coupons, loyalty points and ordering', w: 1035, h: 613 },
		},
		sections: [
			{
				heading: 'Research first',
				body: [
					'I prepared and ran qualitative and quantitative research with guests, and turned it into personas, user flows and customer journeys that set the project goals with the stakeholders.',
				],
			},
			{
				heading: 'Validated with guests',
				body: [
					'From low to high fidelity wireframes and interactive prototypes, every key flow went through usability tests before it was built.',
				],
				shot: { kind: 'slot', label: 'Loyalty card close-up', spec: '1:1, 2000 px, cropped from the app comp', ratio: '1 / 1' },
			},
			{
				heading: 'A system the developers could run with',
				body: [
					'I defined the design system and handed it to the external development team, and advised on both guest and business journeys across the app and the website.',
				],
			},
		],
	},
];
