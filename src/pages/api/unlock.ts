// Checks the password for a private case and, when it is right, sets the cookie and opens the full case.
import type { APIRoute } from 'astro';
import { isLocked } from '../../data/lock';
import { checkPassword, token, unlock } from '../../lib/lock';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const form = await request.formData().catch(() => null);
	const slug = String(form?.get('slug') || '');
	const password = String(form?.get('password') || '');
	if (!isLocked(slug)) return redirect('/', 303);
	if (!checkPassword(password) || !token()) return redirect(`/work/${slug}/?wrong=1#unlock`, 303);
	unlock(cookies);
	return redirect(`/work/${slug}/full/`, 303);
};

export const GET: APIRoute = ({ redirect }) => redirect('/', 303);
