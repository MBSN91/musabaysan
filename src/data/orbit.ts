// The hero orbit: a field of real work circling the headline (after getartcraft.com's hero, studied with
// Craft Anything). Every tile is Musa's own work, spread across projects so no single product leads:
// ATHLIQ (at most five), adidas only as a redrawn wireframe, Happy Italy, and client websites.
// ring 0 is the wide outer ring, ring 1 the inner ring; `a` is the start angle in degrees (0 = nearest
// the camera); `y` the height in svh from the headline's centre; `desk` tiles are left out on phones.
export type Tile = {
	kind: 'phone' | 'video' | 'site' | 'comp' | 'wire';
	src: string;              // image, video, or wireframe name in src/wire
	poster?: string;
	label: string;            // shown on hover
	ring: 0 | 1;
	a: number;
	y: number;
	desk?: boolean;
};

export const tiles: Tile[] = [
	// outer ring
	{ kind: 'phone', src: '/img/orbit/athliq-today.webp', label: 'ATHLIQ, the day score', ring: 0, a: 20, y: -30 },
	{ kind: 'site', src: '/img/orbit/site-glowtect.webp', label: 'Glowtect, B2B web shop', ring: 0, a: 65, y: 22 },
	{ kind: 'wire', src: 'adidas-bulkscan', label: 'adidas store app, bulk scanning, redrawn', ring: 0, a: 110, y: -34 },
	{ kind: 'comp', src: '/img/orbit/site-barber-devices.webp', label: 'Barbershop Dongen, website with online booking', ring: 0, a: 155, y: 30, desk: true },
	{ kind: 'site', src: '/img/orbit/site-connecting.webp', label: 'Connecting People, website', ring: 0, a: 200, y: -27 },
	{ kind: 'video', src: '/img/orbit/athliq-player.mp4', poster: '/img/orbit/athliq-player-poster.webp', label: 'ATHLIQ, the workout player', ring: 0, a: 245, y: 34, desk: true },
	{ kind: 'comp', src: '/img/orbit/happy.webp', label: 'Happy Italy, ordering and loyalty app', ring: 0, a: 290, y: -20 },
	{ kind: 'site', src: '/img/orbit/site-glowtect-products.webp', label: 'Glowtect, the product range', ring: 0, a: 335, y: 26, desk: true },
	// inner ring
	{ kind: 'site', src: '/img/orbit/site-barbershop.webp', label: 'Barbershop Dongen, website', ring: 1, a: 0, y: -22 },
	{ kind: 'phone', src: '/img/orbit/happy-home.webp', label: 'Happy Italy, the app home with coupons', ring: 1, a: 51, y: 28 },
	{ kind: 'phone', src: '/img/orbit/athliq-diary.webp', label: 'ATHLIQ, the food diary', ring: 1, a: 103, y: -32 },
	{ kind: 'comp', src: '/img/orbit/site-suits.webp', label: 'Made-to-measure suit maker, website', ring: 1, a: 154, y: 20 },
	{ kind: 'video', src: '/img/orbit/athliq-week.mp4', poster: '/img/orbit/athliq-week-poster.webp', label: 'ATHLIQ, the week overview', ring: 1, a: 206, y: -36 },
	{ kind: 'site', src: '/img/orbit/site-connecting-jobs.webp', label: 'Connecting People, vacancies', ring: 1, a: 257, y: 30, desk: true },
	{ kind: 'phone', src: '/img/orbit/athliq-recovery.webp', label: 'ATHLIQ, recovery', ring: 1, a: 309, y: -26, desk: true },
];

// Ring geometry, shared by the static layout (Orbit.astro) and the motion (scripts/site.ts).
// rx and rz in vw, speed in degrees per second.
export const rings = [
	{ rx: 50, rz: 30, speed: 2.2 },
	{ rx: 34, rz: 20, speed: -3.2 },
];
