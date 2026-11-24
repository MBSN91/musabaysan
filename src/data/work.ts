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
		// v2, 24 Nov 2026. Sources: Musa's Drive (old/Losse projecten/adidas), work-adidas memory, Musa's answers of 17 and 24 Nov 2026.
		// Sheet: ~/.hermes/plans/portfolio-research/H-adidas-drive-findings.md. Attribution: part of the 2021 merge research; LED the 2023 research
		// with UX colleagues; first label printing version (piloted in Russia, restyled since by the team); product filters his; order handling: part
		// of the team; feedback loop: pushed by him. Bulk scanning is NOT his and stays out. The 2021 XD files are the previous designer's.
		// July 2023 online test: 11 store staff (one team dry run excluded). Never name testers or their regions. No internal app names.
		slug: 'adidas-store-app',
		name: 'adidas store app',
		title: 'Seven store apps became one',
		summary: 'adidas store staff ran their day on seven separate apps. Since 2021 I have worked on the one app that replaced them, with developers, product owners and UX designers: I designed the first label printing on a phone, led the research with store staff in 2023, designed the product filters and worked on moving online orders into the app, which now runs in 1,300 stores in 45 countries.',
		field: 'var(--lime)',
		ink: '#000000',
		facts: [
			['Role', 'UX designer on contract from 2021, in the store app team since 2022: Manager UX Design, now Digital Experience Designer'],
			['My parts', 'The first version of label printing, the 2023 research with store staff (led, with UX colleagues), the product filters, the component library (with the developers and retail UX designers), order handling (part of the team), the feedback loop (pushed for it)'],
			['Worked with', 'Product owners, developers, retail UX designers, digital champions in stores, markets'],
			['Platform', 'iPhone and iPad, all markets'],
			['Years', '2021 to now'],
			['Status', 'Rolled out worldwide in November 2025: 1,300 stores in 45 countries, used by 30,000+ store employees'],
		],
		front: {
			mast: 'adidas',
			title: 'Seven store apps became one',
			lines: [['Apps replaced', '7'], ['Stores', '1,300'], ['Years', '2021 to now']],
			star: { kind: 'device', wire: 'adidas-bulkscan', alt: 'Redrawn wireframe of a store app screen: a summary card and a list of products', caption: 'Redrawn as a wireframe. The real screens are confidential.' },
		},
		chapter: {
			body: 'Seven store apps became one, used by [30,000]+ adidas store employees in [1,300] stores. My parts: the first label printing on a phone, the 2023 research with store staff, the product filters, and order handling on one phone.',
			visual: { kind: 'wire', wire: 'adidas-bulkscan', alt: 'Redrawn wireframe of a store app screen: a summary card and a list of products', note: 'Redrawn as a wireframe. The real screens are confidential.' },
		},
		closing: {
			heading: 'What this case shows',
			body: [
				'Five years on one product with many teams: from a first feature on a phone, through research that shaped the whole app, to the loop we are now building so staff can shape it.',
				'The real screens are confidential. In a call I walk you through them.',
			],
		},
		sections: [
			{
				heading: 'Seven apps for one store day',
				body: [
					'When I started as a contractor in August 2021, a store employee’s day ran through seven apps, for jobs like looking up stock, refilling the shop floor, the stockroom bins, online orders, RFID counts, price labels and selling the online range on an iPad.',
					'In 2023 we mapped a day in store, from opening to closing, with staff around the world. The same pains came back at every step: Wi-Fi dropping out, stock that didn’t match the shelf, being logged out of one tool after two minutes, and requests spread over different tools. One employee asked for a single place to get help, because they used so many tools.',
				],
				shot: { kind: 'image', img: '/img/adidas/adidas-map.webp', alt: 'Before: seven apps, for looking up stock, refilling the shop floor, stockroom bins, online orders, RFID counts, price labels and selling the online range on an iPad. After: one app, with every feature sorted by store staff into five areas: signing in, stock and logistics, the store’s daily rhythm, my own tools, and finding products in store and online', w: 2080, h: 1542 },
			},
			{
				heading: 'Price labels from a phone',
				body: [
					'My first piece of this work, in 2021, was the first version of label printing from a phone. Until then, staff wrote price labels by hand. I mapped the flow so a store sets up once and then only scans and prints: pick the store, connect the printer and fetch the label template, then scan or type an article, choose how many and print.',
					'The first version went to a pilot in stores in Russia, which ended when adidas stopped trading there in 2022. The flow lived on: today’s label printing in the one app still follows it. We have since moved its look from Apple’s standard components to adidas’s own design system, and the latest version is the team’s.',
				],
				shot: { kind: 'image', img: '/img/adidas/adidas-labels.webp', alt: 'The first version of label printing from a phone, redrawn as four steps: pick your store, connect the printer and fetch the label once, scan or type the article, choose how many and print. Before it, price labels were written by hand', w: 2224, h: 1707 },
			},
			{
				heading: 'Research with the people who use it',
				body: [
					'In November 2022 I built five versions of a prototype for the merged app in one week. In 2023 I led the research with store staff, together with colleagues from the UX team: a remote panel of store staff, seven recorded feedback sessions in March and April, card sorts in which staff sorted every feature into five areas, and the day-in-store map. We decided the navigation in tests with digital champions: store employees around the world who speak for their colleagues on the app.',
					'In July 2023, 11 store staff tested two versions of the product page on their own, in an online test with three tasks: request a size from the stockroom, find vegan shoes and offer other sizes. They rated the first version higher, 8 of 11 gave it 4 or 5 out of 5 against 5 of 11 for the second, yet when asked to choose, six picked the second. One said the page looked so much like the app they knew that there was nothing new to learn.',
					'A split vote is a finding too: neither page was finished. Their asks were concrete: a bigger price and article number, men’s and women’s sizes, total stock, and when the stock was last updated.',
				],
				shot: { kind: 'image', img: '/img/adidas/adidas-research.webp', alt: 'Research with store staff, 2022 to 2023: 5 prototype versions of the one app built in one week (November 2022); 7 recorded feedback sessions with store staff (March and April 2023); 5 areas that store staff sorted every feature into (card sorts, May 2023); 8 of 11 rated product page A 4 or 5 out of 5, yet 6 of 11 chose page B (online test, July 2023)', w: 2080, h: 1338 },
			},
			{
				heading: 'Filters staff asked for',
				body: [
					'Staff look up products while the customer waits. I designed the product filters for looking up stock, piloted in 10 stores from late 2022 and switched on in every store in North America and Western Europe in 2023.',
					'In an internal survey of 60 store staff from more than 50 stores, 93% said the filters help them give customers the best service, a net promoter score of +43. Staff also ranked the features they wanted next, and two of them shipped: filtering by age group and searching by product name.',
				],
			},
			{
				heading: 'One phone for an online order',
				body: [
					'Click and collect and ship-from-store orders took several apps and two devices, one of them a PC in the back office. I was part of the team that moved order handling into the app: build the pick list, pick, pack by order, print the shipping label and hand the order over, all on one phone.',
					'We tested it with staff in stores in Barcelona, London and Amsterdam and showed it at the digital champions summit, where staff told us they wanted it yesterday. It went live with the worldwide rollout in November 2025.',
				],
			},
			{
				heading: 'One look on every device and in every market',
				body: [
					'New features land in one app that looks and works the same everywhere. I built the component library with the developers and the retail UX designers, for iPhone and iPad, and in 2025 for smaller devices too.',
					'Markets bring their own rules. When Bulgaria moved to the euro, I designed the product page to show prices in both currencies.',
				],
			},
			{
				heading: '30,000 users, and their feedback came in by chance',
				body: [
					'Feedback from stores reached the product team through market teams, calls and chats, and lost detail on the way. Each region had its own workaround, from group chats to a shared spreadsheet. In 2026 I pushed for a feedback loop inside the app.',
					'With the product owner I ran a listening tour with the six global operations regions, then a two-day hackathon with developers, QA and product to turn what we heard into working prototypes. We also sorted 114 paper feedback cards from store leaders in the US and Canada; the most common asks were about refill lists, prices and incoming stock.',
					'Status: the in-app loop is designed and its backend approved. Building it is next.',
				],
			},
			{
				heading: 'What shipped, what we measured, what I can’t share',
				body: [
					'Shipped: one app that brings together the work of seven, rolled out in November 2025 to 1,300 stores in 45 countries, with order handling inside it; label printing that still follows the 2021 flow; product filters in every store in North America and Western Europe.',
					'Measured: the July 2023 online test with 11 store staff, and the 2023 internal survey on the filters (93% of 60 store staff).',
					'Not shared: usage numbers, store data and the real screens.',
				],
			},
			{
				heading: 'What I’d change',
				body: [
					'Start the feedback loop on day one. We merged seven apps on research and tests, but a steady signal from 30,000 users only started in 2026, five years in.',
				],
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
		// Drive (read 24 Nov 2026): survey export (93 responses), feedback concepts Oct 2020, flowchart Aug 2020, ordering test notes 14 Jun 2021
		// (6 testers with notes, 24 to 42), handover notes Jul 2021 (soft launch near, scope cuts, coupon QR idea). Never quote the handover's credentials.
		// Table QR stands (Dec 2020) linked to the Eijsink web ordering branded Happy Italy, not the app; the app used the same platform via its API (Musa, 24 Nov).
		// Musa doesn't recall why the one-sheet rating won: never present it as a reasoned decision.
		slug: 'happy-italy-app',
		name: 'Happy Italy app',
		title: 'A loyalty app scoped to what the tills could do',
		summary: 'Happy Italy, a chain of 20 Italian restaurants, wanted a direct line to its guests while lockdowns kept the dining rooms closed. I designed its ordering and rewards app from a survey of 93 people to a tested ordering flow and the design system an outside agency built from, and cut the first version to what the restaurant systems could carry.',
		field: 'var(--panel-3)',
		ink: 'var(--on-panel-3)',
		facts: [
			['Role', 'UX designer: research, UX and visual design, prototyping and testing'],
			['Worked with', 'Management, restaurant stakeholders, an external development agency'],
			['Platform', 'iOS and Android'],
			['Years', '2020 to 2021'],
			['Status', 'Designed, tested and in development when I left in July 2021, nearing a small soft launch. Never launched: the chain changed owners and the app was not funded'],
			['Research', 'A survey of 93 people, interviews, Google Analytics, Hotjar and usability tests'],
		],
		front: {
			mast: 'Happy Italy',
			title: 'A loyalty app scoped to what the tills could do',
			lines: [['Role', 'UX designer'], ['Prototype', '114 screens'], ['Years', '2020 to 2021']],
			star: { kind: 'comp', img: '/img/happy/happy-cover.webp', alt: 'Five Happy Italy app screens: picking a day and time, a live coupon with its countdown, the home screen with coupons, the profile with points, and a coupon', w: 2400, h: 1399 },
		},
		chapter: {
			body: 'An ordering and rewards app for a restaurant chain closed by the lockdowns: from a survey of [93] people to a [114]-screen prototype, with the first version cut to what the tills could carry.',
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
					'The kick-off with the stakeholders produced far more features than a first version could hold. I surveyed 93 people about restaurants and apps, recruited mostly through Facebook groups and Reddit, and combined it with interviews, Google Analytics and Hotjar. Most had never downloaded a restaurant app, and several said they would not install one for a single visit. Those who saw value named deals you only get in the app, and ordering ahead.',
					'One persona could not cover the guests of a restaurant chain, so I made two and used them to decide what went into the first version: ordering, coupons, points and feedback. Everything else went on a list for version 2. The option that lost: launching with everything the kick-off asked for.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-personas.webp', alt: 'The two personas for the Happy Italy app, Charlotte and Wouter, with their needs and pain points', w: 1820, h: 1832 },
			},
			{
				heading: 'A coupon you show at the counter',
				body: [
					'Coupons were the reason guests said they would open the app, so they lead the home screen; I tested three menu structures as wireframes and built on the one guests found most natural.',
					'A coupon is used in the restaurant, so the guest activates it in front of staff and it stays valid for 15 minutes, with the countdown on screen. A screenshot can’t be passed around, and staff see at a glance that it is live. Expired coupons stay on the home screen, greyed out, so nobody wonders where theirs went.',
					'Showing a coupon still leaves staff to judge it, and in my handover I called it a source of arguments at the counter. For the next version I listed a unique QR code per coupon: staff scan it, the discount applies itself, and the chain sees how many coupons are used in the app and in the restaurant.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-coupon.webp', alt: 'The coupon flow in the app: the coupon, the prompt to activate it in front of staff, and the live coupon counting down from 15 minutes', w: 2213, h: 1433 },
			},
			{
				heading: 'Order where you are',
				body: [
					'One start for every way to order: takeaway, delivery, or order and pay at the table. Then the restaurant, the day and the time, so the menu, prices and pickup slot are those of that restaurant at that moment.',
					'All of it ran on the till supplier’s ordering platform. The chain’s web ordering used it, the table QR stands I prepared for more than 2,700 tables in 19 restaurants linked to it, and the app connected to it through its API, so a menu or price changed once, everywhere.',
					'In June 2021 I tested three versions of the ordering flow with six people aged 24 to 42 who order food on their phone, with one task: order a margherita with extra cheese and pay. In the first, testers weren’t sure the pizza was in the cart, hunted for the extra topping and missed the payment method. The third confirmed every addition straight away, listed all toppings together and put the payment method in plain sight. All six found it the easiest, and four scored it 5 out of 5.',
					'Still open after the test: more colour, because the dark screens felt less like Happy Italy to some, and choosing the pickup time at the end of the order.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-ordering.webp', alt: 'A pizza page in the app before and after the prototype test: after the test, a large add-to-cart button with the price', w: 1690, h: 1373 },
			},
			{
				heading: 'Feedback earns points',
				body: [
					'The chain wanted to hear from guests while the visit was still fresh. In the flow I drew, the request comes a while after the order or once the till marks the bill paid, and answering earns points, so feedback sits inside the loyalty loop instead of in a survey email.',
					'I explored several ways to ask, from one question per screen with faces and a progress line to everything on a single sheet. The final prototype has five quick star ratings on one sheet, on the service, the speed, the food, the atmosphere and the menu, each with an optional comment.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-feedback.webp', alt: 'Rating a visit in the app. Kept: five quick star ratings on one sheet, on the service, the speed, the food, the atmosphere and the menu, with a button to claim your points. Explored: one question per screen with faces and a progress line, ending in plus ten points', w: 2154, h: 1320 },
			},
			{
				heading: 'Rewards waited for the till',
				body: [
					'During the build it turned out the till and the online ordering platform could not yet handle claiming rewards with points. We took claiming out of the first version instead of shipping a flow that would fail at the counter; guests kept collecting points until the systems caught up. The same limit held back allergens: I had designed them, but the till’s back office couldn’t hold them yet.',
					'Because the app waits on several outside systems, I designed a loading state for every screen that does, so guests always see that something is happening.',
				],
			},
			{
				heading: 'A system the developers could build from',
				body: [
					'There was no design system for web or app. I built one from the 2018 brand identity, updated so it would not look like the fast-food apps: type, colour sets for dark and light mode and for coupons, icons, navigation and 34 components.',
					'Every app screen exists in dark and light. I checked colour pairs against WCAG 2.0 contrast and refined the library before handing it to the external developers.',
					'An outside agency built the app on the till supplier’s system, which held the menu and prices. I tested the builds at the office and fed what I found back to the developers through their tracker.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-system.webp', alt: 'Part of the Happy Italy design system: brand and coupon colours, dark and light greys, coupon cards, buttons, navigation and the points block', w: 2207, h: 1560 },
			},
			{
				heading: 'What happened next',
				body: [
					'When I left in July 2021, the first version was nearing a small soft launch, and I wrote a handover for the next designer: what to test, and what waited for later versions, from order history and favourites to booking a table in the app and following your order live. Later that year the chain changed owners, and the new owner did not fund the app.',
				],
			},
			{
				heading: 'What we tested, what shipped, what I can’t show',
				body: [
					'Shipped to the developers: the design system and a 114-screen prototype.',
					'Tested: the survey of 93 people, and the June 2021 ordering test, where all six testers found the third version the easiest.',
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
		// Happy Italy website. Researched, designed in Figma and built in Webflow by Musa. Live between 28 Feb and 14 Mar 2021 (Wayback, first form application) until late 2021.
		// Split from the app on Musa's request, 17 Nov 2026. CMS facts from his Webflow project (hppyprjct, read 18 Nov 2026). Musa entered the dishes; HR entered the vacancies (Musa, 18 Nov).
		// Numbers from Musa's 2020 research doc and laptop backup (read 24 Nov 2026): GA week 27 Jul to 2 Aug 2020, 8 of 40, Lookback with 5 colleagues, Oct 2020 promotion,
		// Webflow form export 7 Jul 2021 (704 applications, 564 people). Drive (read 24 Nov): handover notes Jul 2021 (Stadia Maps, Zapier, Google Business bulk import, 100k+ visitors/month),
		// Oct 2020 campaign sheets are daily figures (5+6 Oct: 522 sign-ups, 182 orders), old menu popup had category tabs (Aug 2020 capture). Sheet: ~/.hermes/plans/portfolio-research/G-happy-italy-archive-findings.md. No after-launch order or booking numbers: never claim one.
		slug: 'happy-italy-website',
		name: 'Happy Italy website',
		title: 'Three ways to order became one button',
		summary: 'When I started in 2020, Happy Italy’s website had no analytics. Once I measured it, 86% of visitors came on a phone and half of all visits ended within ten seconds. I researched, designed and built the chain’s new website in Webflow around ordering, the menu and hiring, and in its first 16 weeks the vacancy pages took 704 applications.',
		field: 'var(--lime)',
		ink: '#000000',
		facts: [
			['Role', 'UX designer: research, the design in Figma and the build in Webflow'],
			['Worked with', 'Management, HR and restaurant stakeholders'],
			['Platform', 'Website for phone, tablet and desktop'],
			['Years', '2020 to 2021'],
			['Research', 'Google Analytics, a feedback round with 40 visitors, usability tests with five colleagues'],
			['Status', 'Live from March 2021, replaced after the chain changed owners later that year. The Webflow project still runs on its Webflow address'],
			['In the CMS', '138 dishes, 14 allergens, 20 restaurants and over 100 vacancies'],
			['Result', '704 job applications in the first 16 weeks'],
		],
		front: {
			mast: 'Happy Italy',
			title: 'Three ways to order became one button',
			lines: [['Role', 'Research, design and build'], ['Applications', '704 in 16 weeks'], ['Live', 'March 2021']],
			star: { kind: 'comp', img: '/img/happy/happy-web-cover.webp', alt: 'The Happy Italy website on desktop and phone: a photo of a smiling server on the terrace, with delivery, takeaway and booking a table on the first screen', w: 2356, h: 1408 },
		},
		chapter: {
			body: 'Twenty restaurants trading through delivery and takeaway, and hiring for every new one. I measured the old site, then designed and built the new one in Webflow: one order button instead of three, a menu with a photo and the allergens of every dish, and vacancy pages that took [704] applications in 16 weeks.',
			visual: { kind: 'image', img: '/img/happy/happy-web-cover.webp', alt: 'The Happy Italy website on desktop and phone: a photo of a smiling server on the terrace, with delivery, takeaway and booking a table on the first screen', w: 2356, h: 1408 },
		},
		closing: {
			heading: 'What this case shows',
			body: [
				'A consumer website from measurement and testing to design and build, with the content model as part of the design: one place for every dish, restaurant and vacancy.',
				'The app I designed for the chain in the same period is its own case.',
			],
		},
		sections: [
			{
				heading: 'Closed dining rooms, two jobs online',
				body: [
					'The chain planned to grow from 20 restaurants to more than 40 within five years. Then the lockdowns closed the dining rooms, and delivery and takeaway kept the restaurants trading.',
					'So the website had two jobs: get guests to order, and hire the people every new restaurant needs.',
				],
			},
			{
				heading: 'Measuring the old site first',
				body: [
					'When I started, the website had no analytics. I installed Google Analytics, and one week in the summer of 2020 showed 28,189 visitors. 86% came on a phone, half of all visits ended within ten seconds, and visitors went back and forth between the booking and location pages.',
					'In a short feedback round on the site, 8 of 40 people could not book a table or did not see how straight away. I then gave five colleagues at head office three tasks in Lookback: order takeaway, book a table for two at eight, and look at the menu while you wait. The menu was a popup of plain text, one tester said she couldn’t see what she was choosing, and allergen information sat two clicks away from the dish.',
					'While the tests ran, I cut one step from the booking path on the old site straight away. The rest needed a new site.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-research.webp', alt: 'The old Happy Italy homepage in November 2020, with the restaurants stacked down the page, next to the numbers measured in 2020: 28,189 visitors in one week, 86% on a phone, 52% of visits ended within ten seconds, and 8 of 40 people could not book a table or not straight away', w: 2080, h: 1720 },
			},
			{
				heading: 'A site head office could edit itself',
				body: [
					'The research pointed at more than a new look. My notes from 2020 say the old site’s base was solid; what held the chain back was that content changes depended on outside parties. So instead of a facelift I proposed a new site on a CMS that head office could edit itself.',
					'I explored the pages in Figma, five concepts for the jobs pages alone, and did most of the design in Webflow, on 18 CMS collections from dishes and allergens to opening hours. A price or a new vacancy changes in one place and shows up everywhere.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-jobs.webp', alt: 'Four concepts for the Happy Italy jobs pages, from two wireframes to two final designs', w: 1824, h: 1420 },
			},
			{
				heading: 'One order button instead of three',
				body: [
					'In February 2021 the top bar had eight items, and three of them were different ways to order: To go, Happy Delivery and Takeaway. In the new site they became one order button, Bestellen.',
					'The first screen offers delivery, takeaway and booking a table, and works as a campaign slot that changes with the season. The slot came from the old site. In 2020 promotions ran only on social media and in the restaurants, so I gave them a place on the website and tracked it: on 5 and 6 October 2020 alone, the Happy Deals page collected 522 newsletter sign-ups and its order button brought 182 takeaway orders.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-nav.webp', alt: 'The Happy Italy top bar in February 2021, with three ways to order, and in June 2021 after the redesign, with one order button and 100 open vacancies on Jobs', w: 1680, h: 820 },
			},
			{
				heading: 'Every restaurant on one template',
				body: [
					'On the old site the restaurant map was a static image, and the restaurants were stacked down one long page. Ordering happens per restaurant, so each of the 20 restaurants got its own page from one template: booking a table, with a note that booking for tonight closes at 17:00, the opening hours, the delivery partners that serve that restaurant, the menu, a local deal, and that restaurant’s vacancies.',
					'Guests see what their own restaurant offers instead of a chain-wide list. I also linked every restaurant’s Google listing to its own page, made their opening hours editable in one spreadsheet import, and swapped Mapbox, at hundreds of euros a month, for the free Stadia Maps.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-restaurant.webp', alt: 'The Breda restaurant page: booking with a note about booking for tonight, opening hours, the delivery partners that serve Breda, and the restaurant’s own vacancies', w: 1626, h: 1416 },
			},
			{
				heading: 'Pick your dishes before you order',
				body: [
					'The old menu was a popup of plain text. The new one is a page of its own, and the whole menu lives in the CMS. I entered it myself: 138 dishes, each with a photo, a price, a short description and the allergens it contains. Guests browse it by section, from appetizers, pizza and pasta to salads, panini and dolci, search for a dish, or switch the pizzas to vegetarian and vegan only.',
					'A heart on each dish saves it to the guest’s own favourites, and a counter shows how many they have picked. Guests put together what they wanted at home before their visit, or at the table.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-dishes.webp', alt: 'The menu on desktop: pizzas with a photo, price, description and allergen icons, two of them saved with a heart. On the phone: the menu sections, search, and a counter showing two saved dishes', w: 2378, h: 1433 },
			},
			{
				heading: 'A menu without your allergens',
				body: [
					'Every dish is linked to the 14 allergens it contains and marked vegan, spicy or halal. Guests with a food allergy untick theirs and see their own menu, instead of clicking through to every dish.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-menu.webp', alt: 'The menu with the allergy filter open: untick your allergens to see your own menu, with all 14 allergens listed', w: 1626, h: 1237 },
			},
			{
				heading: 'One role description, a hundred vacancies',
				body: [
					'In June 2021 the site listed 100 open vacancies. Most of them were the same few roles in different restaurants, so I set up the jobs as 16 standard roles, each described once. HR then added the vacancies themselves, without me: pick a role, a restaurant and the hours, fulltime, parttime or flex.',
					'Every vacancy gets its own page with one apply button, and the number on Jobs in the top bar counts the open vacancies straight from the CMS.',
					'Applications went straight to HR’s inbox, and franchise requests to the franchise team, through an automation I set up. In its first 16 weeks, from mid-March to early July 2021, the apply form took 704 applications from 564 people, and the count grew every month: 154 in April, 196 in May, 215 in June. Every restaurant received applications.',
				],
				shot: { kind: 'image', img: '/img/happy/happy-web-jobs.webp', alt: 'The jobs overview grouped by restaurant on desktop, and a vacancy page on a phone with one apply button', w: 2286, h: 1368 },
			},
			{
				heading: 'What happened next',
				body: [
					'When I left in July 2021, I moved the site to the company’s own Webflow account and wrote a handover, down to what to fix next: restaurants were hard to reach by phone after five. Later that year the chain changed owners and moved the website to the look of its other brands.',
				],
			},
			{
				heading: 'What shipped, what I measured, what I can’t show',
				body: [
					'Shipped: the website for phone, tablet and desktop, live from March 2021. The screens here come from the Webflow project, which still runs on its Webflow address.',
					'Measured: the 2020 baseline, the feedback round and the October 2020 promotion come from my Google Analytics reports and research notes of the time. The 704 applications come from the Webflow form export of July 2021, and my handover notes put the traffic at well over 100,000 unique visitors a month.',
					'Can’t show: before-and-after numbers for orders and bookings, and an application count from the old site to compare with.',
				],
			},
			{
				heading: 'What I’d change',
				body: [
					'Keep the numbers outside the tool. My 2020 baseline survived because I wrote it into my research notes. The after-launch figures stayed in Google Analytics, and Google deleted that data in 2024. Next time I agree the numbers to watch with the business before the build, and save the before and after side by side in the project notes.',
				],
			},
		],
	},
];
