// Sets the one password for private cases (src/data/lock.ts). Only a salted PBKDF2 hash lands in the repo.
// Usage: node scripts/case-password.mjs   (type the password when asked; it is not shown)
//    or: printf %s "$PASSWORD" | node scripts/case-password.mjs
// Then commit src/data/lock.ts and deploy. Visitors who unlocked with the old password have to enter the new one.
import { pbkdf2Sync, randomBytes } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'lock.ts');
const iterations = 310000;

const fromTty = () => new Promise((resolve) => {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
	let muted = false;
	rl._writeToOutput = (s) => { if (!muted) rl.output.write(s); };
	rl.question('Password for private cases: ', (answer) => { rl.close(); process.stdout.write('\n'); resolve(answer); });
	muted = true;
});
const fromPipe = async () => { let s = ''; for await (const chunk of process.stdin) s += chunk; return s.replace(/\r?\n$/, ''); };

const password = (process.stdin.isTTY ? await fromTty() : await fromPipe()).normalize('NFKC');
if (password.length < 10) { console.error('Use at least 10 characters.'); process.exit(1); }

const salt = randomBytes(16);
const hash = pbkdf2Sync(password, salt, iterations, 32, 'sha256').toString('hex');
const src = await readFile(file, 'utf8');
const out = src
	.replace(/iterations: \d+,/, `iterations: ${iterations},`)
	.replace(/salt: '[0-9a-f]*',/, `salt: '${salt.toString('hex')}',`)
	.replace(/hash: '[0-9a-f]*',/, `hash: '${hash}',`);
if (out === src) { console.error('Could not find the passwordHash block in src/data/lock.ts.'); process.exit(1); }
await writeFile(file, out);
console.log('Updated src/data/lock.ts. Commit it and deploy.');
