// Pulls the published content and media from the CMS (cms/, Payload) before `astro build`.
// Writes src/data/cms.json in the shapes the pages already use (src/data/work.ts, home.ts, orbit.ts) and
// downloads every file it uses into public/cms/. Without CMS_URL it does nothing and the site builds from
// the built-in defaults. With CMS_URL set, any failure stops the build, so a half-pulled site never deploys.
//
//   CMS_URL=https://cms.example.com CMS_API_KEY=... node scripts/pull-content.mjs
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'src/data/cms.json');
const dir = path.join(root, 'public/cms');
const base = (process.env.CMS_URL || '').replace(/\/$/, '');
const key = process.env.CMS_API_KEY || '';

if (!base) {
	if (existsSync(out)) await rm(out);
	console.log('[content] CMS_URL is not set: building from the built-in content');
	process.exit(0);
}

const headers = key ? { Authorization: `users API-Key ${key}` } : {};
const get = async (p) => {
	const res = await fetch(base + p, { headers });
	if (!res.ok) throw new Error(`${p}: ${res.status} ${res.statusText}`);
	return res.json();
};

// ---- media ---------------------------------------------------------------------------------------
const downloads = new Map(); // local path -> remote url
const want = (url, name) => {
	if (!url || !name) throw new Error(`a file has no url (${name})`);
	const local = `/cms/${name}`;
	downloads.set(local, url.startsWith('http') ? url : base + url);
	return local;
};
const altOf = (m, alt) => alt || m?.alt || '';
const isVideo = (m) => (m?.mimeType || '').startsWith('video/');

// Most uses: the `web` size (webp, at most 2400 wide), or the original for videos and small files.
const file = (m) => {
	if (!m || typeof m !== 'object') throw new Error('a file is missing (unpublished or deleted?)');
	const web = m.sizes?.web;
	if (!isVideo(m) && web?.url) return { img: want(web.url, web.filename), w: web.width, h: web.height };
	return { img: want(m.url, m.filename), w: m.width ?? 0, h: m.height ?? 0 };
};
// App screens in the phone frames: 640 wide plus an @2x file next to it (Device.astro adds the srcset).
const screen = (m) => {
	if (!m || typeof m !== 'object') throw new Error('a screen file is missing (unpublished or deleted?)');
	const one = m.sizes?.phone, two = m.sizes?.phone2x;
	if (!one?.url) return file(m).img;
	const name = m.filename.replace(/\.[^.]+$/, ''); // Payload keeps original names unique
	const img = want(one.url, `${name}-screen.webp`);
	if (two?.url && two.width > one.width) want(two.url, `${name}-screen@2x.webp`);
	return img;
};

const paragraphs = (t) => (t || '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
const pairs = (rows) => (rows || []).map((r) => [r.label, r.value]);
const texts = (rows) => (rows || []).map((r) => r.text);
const bar = (b) => ({ label: b?.label || '', meta: b?.meta || '' });

const shot = (s) => {
	if (!s || !s.kind || s.kind === 'none') return undefined;
	if (s.kind === 'slot') return { kind: 'slot', label: s.slotLabel || '', spec: s.spec || '', ratio: s.ratio || '3 / 2', ...(s.blur ? { blur: true } : {}) };
	if (s.kind === 'device') return { kind: 'device', wire: s.wire, ...(s.image ? { img: screen(s.image) } : {}), alt: altOf(s.image, s.alt) };
	if (s.kind === 'phone') return { kind: 'phone', img: screen(s.image), alt: altOf(s.image, s.alt) };
	const f = file(s.image);
	return { kind: 'image', img: f.img, alt: altOf(s.image, s.alt), w: f.w, h: f.h };
};

const colours = {
	lime: { field: 'var(--lime)', ink: '#000000' },
	green: { field: 'var(--green)', ink: '#000000' },
	light: { field: 'var(--panel-3)', ink: 'var(--on-panel-3)' },
};

const toCase = (d) => {
	const st = d.star || {};
	const star = st.kind === 'comp'
		? (() => { const f = file(st.image); return { kind: 'comp', img: f.img, alt: altOf(st.image, st.alt), w: f.w, h: f.h }; })()
		: {
			kind: 'device', wire: st.wire, ...(st.image ? { img: screen(st.image) } : {}), alt: altOf(st.image, st.alt),
			...(st.caption ? { caption: st.caption } : {}),
			...(st.notes?.length ? { notes: st.notes.map((n) => ({ text: n.text, x: n.x, y: n.y, side: n.side })) } : {}),
		};
	const v = d.chapterVisual || {};
	const visual = v.kind === 'wire'
		? { kind: 'wire', wire: v.wire, alt: v.alt || '', ...(v.note ? { note: v.note } : {}) }
		: v.kind === 'image'
			? (() => { const f = file(v.image); return { kind: 'image', img: f.img, alt: altOf(v.image, v.alt), w: f.w, h: f.h }; })()
			: { kind: 'screens', screens: (v.screens || []).map((s) => ({ img: screen(s.image), alt: altOf(s.image, s.alt) })) };
	const section = (s) => ({ heading: s.heading, body: paragraphs(s.body), ...(shot(s.shot) ? { shot: shot(s.shot) } : {}) });
	const c = colours[d.colour] || colours.lime;
	return {
		slug: d.slug, name: d.name, title: d.title, summary: d.summary, field: c.field, ink: c.ink,
		facts: pairs(d.facts),
		front: { mast: d.mast, ...(d.struck ? { struck: d.struck } : {}), title: d.coverTitle, lines: pairs(d.lines), star },
		chapter: { body: d.chapterBody, visual },
		sections: (d.sections || []).map(section),
		...(d.closing?.heading ? { closing: section(d.closing) } : {}),
	};
};

// ---- pull ----------------------------------------------------------------------------------------
const q = 'depth=2&limit=100';
const [caseRes, h, o, ct] = await Promise.all([
	get(`/api/cases?${q}&sort=_order&where[_status][equals]=published`),
	get(`/api/globals/home?depth=2`),
	get(`/api/globals/orbit?depth=2`),
	get(`/api/globals/contact?depth=2`),
]);
if (!caseRes.docs?.length) throw new Error('the CMS has no published case studies');

const snapshot = {
	cases: caseRes.docs.map(toCase),
	home: {
		seo: { title: h.seoTitle, description: h.seoDescription },
		hero: { lines: texts(h.lines), lead: h.lead, cta: h.cta },
		ticker: texts(h.ticker),
		statement: h.statement,
		work: { bar: bar(h.work?.bar), title: h.work?.title },
		sites: {
			title: h.sites?.title, text: h.sites?.text,
			items: (h.sites?.items || []).map((s) => { const f = file(s.image); return { img: f.img, alt: altOf(s.image, s.alt), name: s.name, w: f.w, h: f.h }; }),
		},
		how: { bar: bar(h.how?.bar), title: h.how?.title, rows: (h.how?.rows || []).map((r) => ({ word: r.word, text: r.text, ...(shot(r.visual) ? { visual: shot(r.visual) } : {}) })) },
		years: { bar: bar(h.years?.bar), title: h.years?.title, items: (h.years?.items || []).map((t) => ({ year: t.year, title: t.title, text: t.text })) },
		about: (() => {
			const a = h.about || {};
			const f = file(a.portrait);
			return {
				bar: bar(a.bar), title: a.title,
				portrait: { img: f.img, alt: altOf(a.portrait, a.portraitAlt), w: f.w, h: f.h },
				paragraphs: paragraphs(a.paragraphs),
				...(shot(a.extra) ? { extra: shot(a.extra) } : {}),
			};
		})(),
	},
	contact: {
		bar: bar(ct.bar), title: ct.title, lead: ct.lead, email: ct.email,
		linkedin: ct.linkedin, linkedinLabel: ct.linkedinLabel, basedIn: ct.basedIn, small: ct.small,
	},
	tiles: (o.tiles || []).map((t) => ({
		kind: t.kind,
		src: t.kind === 'wire' ? t.wire : t.kind === 'video' ? file(t.file).img : t.kind === 'phone' ? screen(t.file) : file(t.file).img,
		...(t.kind === 'video' && t.poster ? { poster: file(t.poster).img } : {}),
		label: t.label,
		ring: t.ring === 'inner' ? 1 : 0,
		a: t.angle,
		y: t.height,
		...(t.desktopOnly ? { desk: true } : {}),
	})),
};

await rm(dir, { recursive: true, force: true });
await mkdir(dir, { recursive: true });
for (const [local, url] of downloads) {
	const res = await fetch(url, { headers });
	if (!res.ok) throw new Error(`download ${url}: ${res.status}`);
	// a lost API key redirects to the admin login page; never save that HTML as an image
	if ((res.headers.get('content-type') || '').startsWith('text/html')) throw new Error(`download ${url}: got a web page instead of a file (check CMS_API_KEY)`);
	await writeFile(path.join(root, 'public', local), Buffer.from(await res.arrayBuffer()));
}
await writeFile(out, JSON.stringify(snapshot, null, '\t'));
console.log(`[content] pulled ${snapshot.cases.length} case studies, ${snapshot.tiles.length} orbit tiles and ${downloads.size} files from ${base}`);
