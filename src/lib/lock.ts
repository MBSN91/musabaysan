// Server-only helpers for private cases (see src/data/lock.ts).
import { createHmac, pbkdf2Sync, timingSafeEqual } from 'node:crypto';
import type { AstroCookies } from 'astro';
import { passwordHash } from '../data/lock';

export const COOKIE = 'mb_case';
export const HINT = 'mb_open'; // readable by the page script: sends returning visitors straight to the full case

// The cookie is signed with a server secret that never reaches the browser or the repo. Without one, nothing unlocks.
const secret = () => process.env.CMS_API_KEY || import.meta.env.CMS_API_KEY || '';

const same = (a: string, b: string) => {
	const x = Buffer.from(a), y = Buffer.from(b);
	return x.length === y.length && timingSafeEqual(x, y);
};

export const checkPassword = (password: string) => {
	const { iterations, salt, hash } = passwordHash;
	if (!salt || !hash || !password) return false;
	const got = pbkdf2Sync(password.normalize('NFKC'), Buffer.from(salt, 'hex'), iterations, 32, 'sha256').toString('hex');
	return same(got, hash);
};

// Changing the password changes the token, so old cookies stop working.
export const token = () => {
	const s = secret();
	return s && passwordHash.hash ? createHmac('sha256', s).update(`case-v1:${passwordHash.hash}`).digest('hex') : '';
};

export const isUnlocked = (cookies: AstroCookies) => {
	const t = token();
	const got = cookies.get(COOKIE)?.value || '';
	return !!t && same(got, t);
};

export const unlock = (cookies: AstroCookies) => {
	const days60 = 60 * 60 * 24 * 60;
	cookies.set(COOKIE, token(), { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: days60 });
	cookies.set(HINT, '1', { secure: true, sameSite: 'lax', path: '/', maxAge: days60 });
};

export const forget = (cookies: AstroCookies) => {
	cookies.delete(COOKIE, { path: '/' });
	cookies.delete(HINT, { path: '/' });
};
