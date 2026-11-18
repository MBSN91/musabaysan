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
		// Happy Italy app. Rewritten 17 Nov 2026 from Musa's 2021 case page and his Figma files; facts confirmed by Musa.
		// Split from the website on Musa's request. Never show the filled-in sign-up screens (real phone number and email).
		slug: 'happy-italy-app',
		name: 'Happy Italy app',
		title: 'A loyalty app scoped to what the tills could do',
		summary: 'Happy Italy, a chain of 20 Italian restaurants, wanted a direct line to its guests while lockdowns kept the dining rooms closed. I designed its ordering and rewards app from research to the design system the developers built from, and cut the first version to what the restaurant systems could actually carry.',
		field: 'var(--panel-3)',
		ink: 'var(--on-panel-3)',
		facts: [
			['Role', 'UX designer: research, UX and visual design, prototyping and testing'],
			['Worked with', 'Management, restaurant stakeholders, an external development team'],
			['Platform', 'iOS and Android'],
			['Years', '2020 to 2021'],
			['Status', 'Designed, tested and in development when I left in July 2021. Never launched: the chain changed owners and the app was not funded'],
			['Research', 'A survey of 90+ people, interviews, Google Analytics and Hotjar'],
		],
		front: {
			mast: 'Happy Italy',
			title: 'A loyalty app scoped to what the tills could do',
			lines: [['Role', 'UX designer'], ['Prototype', '114 screens'], ['Years', '2020 to 2021']],
			star: { kind: 'comp', img: '/img/happy/happy-cover.webp', alt: 'Five Happy Italy app screens: picking a day and time, a live coupon with its countdown, the home screen with coupons, the profile with points, and a coupon', w: 2400, h: 1399 },
		},
		chapter: {
			body: 'An ordering and rewards app for a restaurant chain closed by the lockdowns: from a survey of [90]+ people to a [114]-screen prototype, with the first version cut to what the tills could carry.',
			visual: { kind: 'image', img: '/img/happy/happy-cover.webp', alt: 'Five Happy Italy app screens: picking a day and time, a live coupon with its countdown, the home screen with coupons, the profile with points, and a coupon', w: 2400, h: 1399 },
		},
		closing: {
			heading: 'What this case shows',
			body: [
				'A consumer app taken from research to handover, with scope set by the business goal and by what the restaurant systems could carry.',
				'In a call I walk you through the Figma files: the design system and the 114-screen prototype.',
			],
			shot: { kind: 'image', img: '/img/happy/happy-modes.webp', alt: 'The app home screen in light and dark mode: a greeting, order and pay, and coupons', w: 1506, h: 1433 },
		},
		sections: [
			{
				heading: 'Twenty restaurants, closed, with a plan to double',
				body: [
					'The chain planned to grow from 20 restaurants to more than 40, and into Europe, within five years. Then the lockdowns closed the dining rooms, and delivery and takeaway kept the restaurants trading.',
					'The app had a business job: give guests a reason to order direct and come back, with points, personal deals and a way to tell the restaurant how it went.',
				],
			},
			{
				heading: 'Research cut the wish list',
				body: [
					'The kick-off with the stakeholders produced far more features than a first version could hold. I surveyed 90+ people about using apps in restaurants, recruited through Facebook groups, the newsletter and Reddit, and combined it with interviews, Google Analytics and Hotjar.',
					'One persona could not cover the guests of a restaurant chain, so I made two and used them to decide what went into the first version: ordering, coupons, points and feedback. Everything else went on a list for version 2. The option that lost: launching with everything the kick-off asked for.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-personas.webp', alt: 'The two personas for the Happy Italy app, Charlotte and Wouter, with their needs and pain points', w: 1820, h: 1832 },
			},
			{
				heading: 'A coupon you show at the counter',
				body: [
					'Coupons were the reason guests said they would open the app, so they lead the home screen; I tested three menu structures as wireframes and built on the one guests found most natural.',
					'A coupon is used in the restaurant, so the guest activates it in front of staff and it stays valid for 15 minutes, with the countdown on screen. A screenshot can’t be passed around, and staff see at a glance that it is live. Expired coupons stay on the home screen, greyed out, so nobody wonders where theirs went.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-coupon.webp', alt: 'The coupon flow in the app: the coupon, the prompt to activate it in front of staff, and the live coupon counting down from 15 minutes', w: 2213, h: 1433 },
			},
			{
				heading: 'Order where you are',
				body: [
					'One start for every way to order: takeaway, delivery, or order and pay at the table. Then the restaurant, the day and the time, so the menu, prices and pickup slot are those of that restaurant at that moment.',
					'A clickable prototype went to a small group of testers, and ordering and paying were where they struggled. We enlarged the buttons and the type, and added a red badge on the cart the moment something is added, so guests can see it worked.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-ordering.webp', alt: 'A pizza page in the app before and after the prototype test: after the test, a large add-to-cart button with the price', w: 1690, h: 1373 },
			},
			{
				heading: 'Feedback earns points',
				body: [
					'The chain wanted to hear from guests after a visit. Rating it takes stars, a few short questions and an optional comment, and earns points, so feedback sits inside the loyalty loop instead of in a survey email.',
				],
			},
			{
				heading: 'Rewards waited for the till',
				body: [
					'During the build it turned out the till and the online ordering platform could not yet handle claiming rewards with points. We took claiming out of the first version instead of shipping a flow that would fail at the counter; guests kept collecting points until the systems caught up.',
					'Because the app waits on several outside systems, I designed a loading state for every screen that does, so guests always see that something is happening.',
				],
			},
			{
				heading: 'A system the developers could build from',
				body: [
					'There was no design system for web or app. I built one from the 2018 brand identity, updated so it would not look like the fast-food apps: type, colour sets for dark and light mode and for coupons, icons, navigation and 34 components.',
					'Every app screen exists in dark and light. I checked colour pairs against WCAG 2.0 contrast and refined the library before handing it to the external developers.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-system.webp', alt: 'Part of the Happy Italy design system: brand and coupon colours, dark and light greys, coupon cards, buttons, navigation and the points block', w: 2207, h: 1560 },
			},
			{
				heading: 'What happened next',
				body: [
					'In the second half of 2021 the chain changed owners, and the new owner did not fund the app. I had left in July 2021, while it was in development.',
				],
			},
			{
				heading: 'What we tested, what shipped, what I can’t show',
				body: [
					'Shipped to the developers: the design system and a 114-screen prototype.',
					'Seen: the survey, and the prototype tests that changed ordering and checkout.',
					'No launch data: the app never reached guests.',
				],
			},
			{
				heading: 'What I’d change',
				body: [
					'Check what the till and the ordering platform can do before designing rewards, not during the build. We found the limit late and had to cut claiming rewards from the first version. Next time I map the systems behind a feature with the developers before the first screen.',
				],
			},
		],
	},
	{
		// Happy Italy website. Designed in Figma and built in Webflow by Musa, live spring to autumn 2021 (Wayback).
		// Split from the app on Musa's request, 17 Nov 2026. Facts from his Webflow project (hppyprjct, read 18 Nov 2026): 18 CMS collections,
		// 138 dishes, 14 allergens, 20 visible restaurants, 16 standard roles, 125 vacancies (115 not archived). Nothing measured: never claim a result.
		slug: 'happy-italy-website',
		name: 'Happy Italy website',
		title: 'Three ways to order became one button',
		summary: 'In 2021 Happy Italy’s 20 restaurants traded through delivery and takeaway, and every new restaurant needed staff. I designed the chain’s new website and built it in Webflow around those jobs: ordering, finding your restaurant and dishes, and hiring.',
		field: 'var(--lime)',
		ink: '#000000',
		facts: [
			['Role', 'UX designer: the design in Figma and the build in Webflow'],
			['Worked with', 'Management and restaurant stakeholders'],
			['Platform', 'Website for phone, tablet and desktop'],
			['Years', '2020 to 2021'],
			['Status', 'Live from spring 2021, replaced after the chain changed owners later that year. The Webflow project still runs on its Webflow address'],
			['In the CMS', '138 dishes, 14 allergens, 20 restaurants and over 100 vacancies'],
		],
		front: {
			mast: 'Happy Italy',
			title: 'Three ways to order became one button',
			lines: [['Role', 'Design and build'], ['Restaurants', '20'], ['Live', '2021']],
			star: { kind: 'comp', img: '/img/happy/happy-web-cover.webp', alt: 'The Happy Italy website on desktop and phone: a photo of a smiling server on the terrace, with delivery, takeaway and booking a table on the first screen', w: 2356, h: 1408 },
		},
		chapter: {
			body: 'Twenty restaurants trading through delivery and takeaway, and hiring for every new one. I designed the new website and built it in Webflow: one order button instead of three, a menu you can filter by allergen, and a page for each of [100] open vacancies.',
			visual: { kind: 'image', img: '/img/happy/happy-web-cover.webp', alt: 'The Happy Italy website on desktop and phone: a photo of a smiling server on the terrace, with delivery, takeaway and booking a table on the first screen', w: 2356, h: 1408 },
		},
		closing: {
			heading: 'What this case shows',
			body: [
				'A consumer website designed and built end to end, with the content model as part of the design: one place for every dish, restaurant and vacancy.',
				'The app I designed for the chain in the same period is its own case.',
			],
		},
		sections: [
			{
				heading: 'Closed dining rooms, two jobs online',
				body: [
					'The chain planned to grow from 20 restaurants to more than 40, and into Europe, within five years. In 2021 the lockdowns kept the dining rooms closed, and delivery and takeaway kept the restaurants trading.',
					'So the website had two jobs: get guests to order, and hire the people every new restaurant needs.',
				],
			},
			{
				heading: 'One order button instead of three',
				body: [
					'In February 2021 the top bar had eight items, and three of them were different ways to order: To go, Happy Delivery and Takeaway. In the new site they became one order button, Bestellen.',
					'The first screen offers delivery, takeaway and booking a table, and it works as a campaign slot that changes with the season, from a Christmas menu in the designs to terrace bookings when the terraces reopened in June 2021.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-nav.webp', alt: 'The Happy Italy top bar in February 2021, with three ways to order, and in June 2021 after the redesign, with one order button and 100 open vacancies on Jobs', w: 1680, h: 820 },
			},
			{
				heading: 'Every restaurant on one template',
				body: [
					'Ordering happens per restaurant, so each of the 20 restaurants has its own page from one template: booking a table, with a note that booking for tonight closes at 17:00, the opening hours, the delivery partners that serve that restaurant, the menu, a local deal, and that restaurant’s vacancies.',
					'Guests see what their own restaurant offers instead of a chain-wide list that may not apply to them.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-restaurant.webp', alt: 'The Breda restaurant page: booking with a note about booking for tonight, opening hours, the delivery partners that serve Breda, and the restaurant’s own vacancies', w: 1626, h: 1416 },
			},
			{
				heading: 'A menu without your allergens',
				body: [
					'The whole menu lives in the CMS: 138 dishes in ten categories, each linked to the 14 allergens it contains and marked vegan, spicy or halal. Guests with a food allergy untick theirs and see their own menu, instead of reading every description.',
					'A heart on each dish lets guests put their order together before they choose how to order.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-menu.webp', alt: 'The menu with the allergy filter open: untick your allergens to see your own menu, with all 14 allergens listed', w: 1626, h: 1237 },
			},
			{
				heading: 'One role description, a hundred vacancies',
				body: [
					'In June 2021 the site listed 100 open vacancies. Most of them were the same few roles in different restaurants, so I wrote 16 role descriptions once and linked each vacancy to a role, a restaurant and its hours: fulltime, parttime or flex.',
					'Every vacancy gets its own page with one apply button, and the number on Jobs in the top bar counts the open vacancies straight from the CMS.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-jobs.webp', alt: 'The jobs overview grouped by restaurant on desktop, and a vacancy page on a phone with one apply button', w: 2286, h: 1368 },
			},
			{
				heading: 'Designed where it was built',
				body: [
					'I explored five concepts for the jobs pages in Figma, from wireframe to final design. Most of the design then happened in Webflow, where I built the site on 18 CMS collections, from dishes and allergens to opening hours.',
					'A price, an opening time or a new vacancy changes in one place and shows up everywhere it is used.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-jobs.webp', alt: 'Four concepts for the Happy Italy jobs pages, from two wireframes to two final designs', w: 1824, h: 1420 },
			},
			{
				heading: 'What happened next',
				body: [
					'In the second half of 2021 the chain changed owners, and the new owner moved the website to the look of its other brands. I had left in July 2021.',
				],
			},
			{
				heading: 'What shipped, what I can’t show',
				body: [
					'Shipped: the website for phone, tablet and desktop, with ordering, the restaurant pages, the menu with allergy filter and the jobs pages, live in 2021. The screens here come from the Webflow project, which still runs on its Webflow address.',
					'Not measured: I have no before-and-after numbers for orders or applications.',
				],
			},
			{
				heading: 'What I’d change',
				body: [
					'Measure before and after. I didn’t set a baseline for orders and applications before the launch, so the redesign has no number. Next time I agree on the numbers to watch with the business before the build starts.',
				],
			},
		],
	},
];
