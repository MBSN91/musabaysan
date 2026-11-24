// Images of private cases (src/data/locked.json). They are never copied into public/: the build leaves them in the
// private CMS (scripts/pull-content.mjs) and this route streams one only to a visitor with a valid unlock cookie.
// Anything else gets the same 404, so the route doesn't reveal which files exist.
import type { APIRoute } from 'astro';
import { isLocked } from '../../../../data/lock';
import { privateMedia } from '../../../../data/content';
import { isUnlocked } from '../../../../lib/lock';

export const prerender = false;

const notFound = () => new Response('Not found', { status: 404, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });

export const GET: APIRoute = async ({ params, cookies }) => {
	const slug = params.slug || '';
	const file = params.file || '';
	const url = privateMedia[slug]?.[file];
	if (!isLocked(slug) || !url || !isUnlocked(cookies)) return notFound();

	const key = process.env.CMS_API_KEY || import.meta.env.CMS_API_KEY || '';
	const res = await fetch(url, { headers: { Authorization: `users API-Key ${key}` } }).catch(() => null);
	const type = res?.headers.get('content-type') || '';
	// a lost API key gets the CMS login page back; never pass that on as an image
	if (!res || !res.ok || type.startsWith('text/html')) return notFound();

	return new Response(res.body, {
		status: 200,
		headers: {
			'Content-Type': type || 'application/octet-stream',
			'Cache-Control': 'private, max-age=86400',
			'Vary': 'Cookie',
			'X-Robots-Tag': 'noindex',
			'X-Content-Type-Options': 'nosniff',
		},
	});
};
