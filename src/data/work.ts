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
		title: 'Many store apps, one app',
		summary: 'The app 30,000+ adidas store employees work with every day, on iPhone and iPad. I design its flows and component library with the developers, product owners and retail UX designers, and work with the membership team on bringing adiClub into the stores.',
		field: 'var(--lime)',
		ink: '#000000',
		facts: [
			['Role', 'UX designer, Manager UX Design from 2022, now Digital Experience Designer'],
			['Years', '2021 to now'],
			['Platform', 'iPhone and iPad, all markets'],
			['Worked with', 'Product, business, developers, retail UX designers, markets'],
		],
		front: {
			mast: 'adidas',
			title: 'Many store apps, one app',
			lines: [['Used by', '30,000+ employees'], ['Platform', 'iPhone and iPad'], ['Years', '2021 to now']],
			star: { kind: 'device', wire: 'adidas-bulkscan', alt: 'Redrawn wireframe of a store app screen: a summary card and a list of products', caption: 'Redrawn as a wireframe. The real screens are confidential.' },
		},
		chapter: {
			body: 'The app 30,000+ adidas store employees work with every day, on iPhone and iPad. I design its flows and component library with the developers, product owners and retail UX designers, and work with the membership team on bringing adiClub into the stores.',
			visual: { kind: 'wire', wire: 'adidas-bulkscan', alt: 'Redrawn wireframe of a store app screen: a summary card and a list of products', note: 'Redrawn as a wireframe. The real screens are confidential.' },
		},
		closing: {
			heading: 'What I can show in a call',
			body: ['The screens are confidential. In a call I walk you through the flows, the research and the decisions behind them.'],
			shot: { kind: 'slot', label: 'Store app flows, rebuilt as wireframes', spec: '3 screens, 1170 × 2532 each, greys only, no real data', ratio: '4 / 3', blur: true },
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
				heading: 'Journey mapping that changed the scope',
				body: [
					'Mapping the in-store membership journey uncovered broken steps and incorrect emails. The scope changed from a screen to the whole journey.',
					'I worked with business, the product owner, the flagship app and CRM teams on the fixes. They shipped within weeks, with wording aligned to what markets expect and what the law requires.',
				],
				shot: { kind: 'slot', label: 'Journey map, anonymised', spec: '3:2, 3000 px wide, redrawn steps only, no real text', ratio: '3 / 2' },
			},
		],
	},
	{
		// Facts confirmed by Musa on 15 and 17 Nov 2026. Team framing: never "only" or "sole".
		// Legal and privacy are not named as collaborators. No staff test results until the December tests.
		slug: 'adiclub-in-stores',
		name: 'adiClub in stores',
		title: 'Membership worked online and broke at the till',
		summary: 'adidas wanted its adiClub membership to work in stores the way it works on the website and in the app. My part started with a store visit that showed sign-up was already failing at checkout; together with four teams we fixed that journey, and then designed with product and development how store staff look up, sign up and check in members.',
		field: 'var(--panel-3)',
		ink: 'var(--on-panel-3)',
		facts: [
			['Role', 'UX designer, next to my work on the store app'],
			['Years', '2026'],
			['Platform', 'Store app on iPhone and iPad, and the tills'],
			['Worked with', 'Product owners, the membership team, store app and till developers, CRM, the flagship app team, markets'],
			['Status', 'Lookup and sign-up live in all stores, including outlets. Phone lookup in development for the US. Check-in designed, store tests in December, launch planned for 2027'],
			['Outcome', 'Broken sign-up journey fixed within weeks'],
		],
		front: {
			mast: 'adiClub',
			title: 'Membership worked online and broke at the till',
			lines: [['Role', 'UX designer'], ['Live in', 'All stores'], ['Years', '2026']],
			star: { kind: 'device', wire: 'adidas-member', alt: 'Redrawn wireframe of a store app screen: a member search, a member card with points, today’s event with a check-in button, and vouchers', caption: 'Redrawn as a wireframe. The real screens are confidential.' },
		},
		chapter: {
			body: 'adiClub worked on the website and in the app, and broke at the till. A store visit turned a new screen into fixing the whole journey with four teams, and then into how store staff look up, sign up and check in members.',
			visual: { kind: 'wire', wire: 'adidas-member', alt: 'Redrawn wireframe of a store app screen: a member search, a member card with points, today’s event with a check-in button, and vouchers', note: 'Redrawn as a wireframe. The real screens are confidential.' },
		},
		closing: {
			heading: 'What this case shows',
			body: [
				'A store visit that changed the scope, four teams fixing a journey none of them owned alone, and design calls made for staff at a busy till.',
				'Next: check-in inside the store app goes live in 2027. The open problem is signing in on shared store devices, where staff now log in again on every device.',
				'The real screens are confidential. In a call I walk you through them.',
			],
			shot: { kind: 'slot', label: 'Member lookup and check-in, rebuilt as wireframes', spec: '3 screens, 1170 × 2532 each, greys only, no real data', ratio: '4 / 3', blur: true },
		},
		sections: [
			{
				heading: 'Membership stopped at the shop door',
				body: [
					'Online, adiClub members collect points, use rewards and get invited to events. In the store, the staff app had no membership at all.',
					'On a store visit I saw email sign-up fail after three attempts, a member QR code take about two minutes to scan, points that could not be used, and purchase confirmation emails that never arrived. Stores are where people touch the product, go to events and meet the brand. A membership that breaks at the till breaks there too.',
				],
				shot: { kind: 'slot', label: 'Journey map, redrawn', spec: '3:2, 3000 px wide, nine steps with the broken ones marked, no real text', ratio: '3 / 2' },
			},
			{
				heading: 'A store visit turned a screen into a journey',
				body: [
					'The brief was to add membership to the store app. A new screen would have sat on top of a journey that was already broken, so I mapped the whole non-member journey first, from walking in to walking out: nine steps, with the moments where staff can actually help, like checkout, where points can be used.',
					'That map changed the scope. Before designing anything new, I worked with business, the product owner, the flagship app and CRM teams on the broken steps. The fixes shipped within weeks, with email wording aligned to what each market expects and what the law requires.',
				],
				shot: { kind: 'slot', label: 'Storyboard at the counter', spec: '3:2, an associate lane and a member lane, four moments: lookup, sign-up, check-in, vouchers', ratio: '3 / 2' },
			},
			{
				heading: 'One map every team could point at',
				body: [
					'The journey map was a working tool, not a deliverable: one page that business, product and development could all point at. A VP asked for the to-be sign-up journey, and it was used at a global retail leadership workshop. Reviews with the design director kept the flows short for staff at a busy till.',
				],
			},
			{
				heading: 'Check-in asks only what staff need',
				body: [
					'The old check-in showed date of birth and asked for photo ID at every event. In the Netherlands, showing someone’s date of birth on a staff screen is off-putting, and at a community run the ID check only slows the queue. We took both out by default: staff confirm a first name, and the app asks for ID only at 18+ or high-profile events, where some markets need it.',
					'A failed check-in mostly means bad Wi-Fi or a slow system, not a bad ticket, and the customer can often see the screen. So the failure state is calm, says why, and lets staff move on to the next person.',
				],
				shot: { kind: 'slot', label: 'Check-in states, redrawn', spec: '4:3, ready, checked in, already checked in, failed; greys only', ratio: '4 / 3' },
			},
			{
				heading: 'We kept member lookup in the outlets',
				body: [
					'For outlet stores, the proposal was to switch member lookup off, because members would see vouchers they can’t use there. We kept it in: lookup is also how staff see a member’s level and points, and outlets have many members.',
				],
			},
			{
				heading: 'Phone lookup goes where the phone numbers are',
				body: [
					'Markets asked for phone number lookup. Only the US and India hold enough phone numbers to make it useful; in Europe it would mostly come back empty. So it goes where the data is, starting with the US, instead of everywhere at once.',
				],
			},
			{
				heading: 'Check-in moves into the app staff already use',
				body: [
					'At a running event in one of our stores, none of the sign-ups were checked in: the check-in app was a separate app that staff didn’t have at hand. When I tested it myself, tickets also scanned on the wrong day. Both point the same way: check-in moves into the app staff use all day, and wrong-day and wrong-store tickets get their own clear states.',
				],
			},
			{
				heading: 'What shipped, what we saw, what I can’t share',
				body: [
					'Shipped: the fixed sign-up journey, and member lookup in the store app with a quick email sign-up when no member is found, in every store including outlets.',
					'Seen: the store visit findings above, and the running event where nobody was checked in. Store tests of the new check-in and lookup with staff follow in December.',
					'Not shared: membership numbers and their share of store sales.',
				],
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
