// Case content for musabaysan.nl. Every fact comes from Musa's CV or facts he confirmed (see PRODUCT.md).
// `slot` entries are shots Musa still has to make; they render as labelled sketches until a file exists.

export type Shot = { kind: 'device'; wire: string; img: string; alt: string }
	| { kind: 'image'; img: string; alt: string; w: number; h: number }
	| { kind: 'slot'; label: string; spec: string; ratio: string; blur?: boolean };

export type Case = {
	slug: string;
	name: string;
	title: string;            // outcome-first
	summary: string;
	field: string;            // CSS colour of the project's field
	ink: string;              // text colour on that field
	facts: [string, string][];
	cover: Shot;
	sections: { heading: string; body: string[]; shot?: Shot }[];
};

export const cases: Case[] = [
	{
		slug: 'adidas-store-app',
		name: 'adidas store app',
		title: '1.5 minutes instead of 5 to 8',
		summary: 'The app 30,000+ adidas store employees work with every day. Testing on the shop floor found a workaround nobody upstream knew about; the native flow I pushed for cut the task to about 1.5 minutes in tests.',
		field: 'var(--adi-field)',
		ink: '#f9f4f0',
		facts: [
			['Role', 'UX designer, Manager UX Design from 2022, now Digital Experience Designer'],
			['Years', '2021 to now'],
			['Platform', 'iPhone and iPad, all markets'],
			['Worked with', 'Product, business, developers, retail UX designers, markets'],
		],
		cover: { kind: 'slot', label: 'Bulk-scan flow, rebuilt as wireframes', spec: '3 screens, 1170 × 2532 each, greys only, no real data', ratio: '4 / 3', blur: true },
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
		field: '#03B5AA',
		ink: '#05192d',
		facts: [
			['Role', 'Designer and developer'],
			['Years', '2025 to now'],
			['Platform', 'iOS and Android, React Native'],
			['Status', 'Alpha, 20 active users'],
		],
		cover: { kind: 'device', wire: 'athliq-player', img: '/img/athliq-player.webp', alt: 'ATHLIQ workout player for a full body schema with a superset of goblet squats' },
		sections: [
			{
				heading: 'Made for the gym floor',
				body: [
					'Clients use ATHLIQ between sets: one hand, sweaty fingers, half their attention. The workout player keeps the next exercise, the reps and the weight in thumb reach.',
				],
				shot: { kind: 'device', wire: 'athliq-today', img: '/img/athliq-today.webp', alt: 'ATHLIQ home screen with a day score of 88 built from protein, sleep and steps' },
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
		field: '#EBD5C2',
		ink: '#05192d',
		facts: [
			['Role', 'UX designer'],
			['Years', '2020 to 2021'],
			['Platform', 'iOS, Android and web'],
			['Worked with', 'Stakeholders, external development team'],
		],
		cover: { kind: 'image', img: '/img/happy-italy.webp', alt: 'Five Happy Italy app screens: menu, coupons, loyalty points and ordering', w: 1200, h: 900 },
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

export const sites = [
	{ img: '/img/site-barber.webp', alt: 'Barber website with online booking on laptop, tablet and phone', name: 'Barber with online booking' },
	{ img: '/img/site-suits.webp', alt: 'Made-to-measure wedding suit website on laptop, tablet and phone', name: 'Made-to-measure suit maker' },
];
