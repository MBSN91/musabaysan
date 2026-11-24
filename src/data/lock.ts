// Private cases. Their page shows the cover, the summary, the facts and the chapter headings; the story itself
// is rendered on the server (src/pages/work/[slug]/full.astro) after the password (src/pages/api/unlock.ts).
// This repo is public: keep the full text of a private case in the CMS only, never in work.ts.
// The slugs live in locked.json so scripts/pull-content.mjs can read them too (it keeps their images out of public/).
import locked from './locked.json';
export const lockedSlugs: string[] = locked;
export const isLocked = (slug: string) => lockedSlugs.includes(slug);

// PBKDF2-SHA256 of the case password (one password for all private cases).
// Set a new one with: node scripts/case-password.mjs  (it asks for the password and rewrites this block).
export const passwordHash = {
	iterations: 310000,
	salt: 'f65885dc7246a82aa0d544df6933a84b',
	hash: 'f6fac20c5e4106b7195bf0ce7b190120e56e46897c084dc96597a1f1e60c3ecf',
};
