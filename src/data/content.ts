// The one place pages get their content from.
// When the CMS is connected, `npm run build` first runs scripts/pull-content.mjs: it downloads the published
// content and media from Payload into src/data/cms.json and public/cms/. Without that snapshot (local work,
// or no CMS_URL set) the site uses the built-in defaults in work.ts, home.ts and orbit.ts.
import { cases as defaultCases, type Case } from './work';
import { home as defaultHome, contact as defaultContact, type Home, type Contact } from './home';
import { tiles as defaultTiles, type Tile } from './orbit';

type Snapshot = { cases: Case[]; home: Home; contact: Contact; tiles: Tile[] };
const found = import.meta.glob<Snapshot>('./cms.json', { eager: true, import: 'default' });
const cms: Snapshot | undefined = found['./cms.json'];

export const fromCms = !!cms;
export const cases: Case[] = cms?.cases ?? defaultCases;
export const home: Home = cms?.home ?? defaultHome;
export const contact: Contact = cms?.contact ?? defaultContact;
export const tiles: Tile[] = cms?.tiles ?? defaultTiles;

// "[20] active users": the bracketed number counts up when it scrolls in. Years never roll.
export const rollParts = (text: string) =>
	text.split(/(\[[^\]]+\])/).filter(Boolean).map((t) => (t.startsWith('[') && t.endsWith(']') ? { text: t.slice(1, -1), roll: true } : { text: t, roll: false }));

// "1.5 min" -> the number rolls, the unit stays.
export const numberLead = (v: string) => {
	const m = v.match(/^([\d.]+)(.*)$/);
	return m ? { num: m[1], rest: m[2] } : null;
};

export const yearsOf = (c: Case) => c.facts.find((f) => f[0] === 'Years')?.[1] ?? '';
