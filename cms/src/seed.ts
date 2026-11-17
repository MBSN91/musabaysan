// Fills an empty CMS with the site's current content (the built-in defaults in ../src/data) and its images.
// Run once per database: `npm run seed`. With content already there it stops, unless you pass --force.
// SEED_EMAIL, SEED_PASSWORD and SEED_API_KEY create the first person who can sign in and the build's API key.
import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from './payload.config'
import { cases, type Shot } from '../../src/data/work'
import { contact, home, type HowVisual } from '../../src/data/home'
import { tiles } from '../../src/data/orbit'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const pub = path.resolve(dirname, '../../public')
const payload = await getPayload({ config })
const log = (m: string) => payload.logger.info(`[seed] ${m}`)

const { totalDocs } = await payload.count({ collection: 'cases' })
if (totalDocs && !process.argv.includes('--force')) {
  log(`there are already ${totalDocs} case studies, so nothing was seeded (use --force to add anyway)`)
  process.exit(0)
}

const ids = new Map<string, number | string>()
const alts = new Map<string, string>()
// Upload a file from public/ once; phone screens use their @2x version when there is one.
const media = async (p: string, alt: string) => {
  const seen = ids.get(p)
  if (seen) return seen
  let file = path.join(pub, p)
  const hi = file.replace(/\.webp$/, '@2x.webp')
  if (fs.existsSync(hi)) file = hi
  const doc = await payload.create({ collection: 'media', data: { alt }, filePath: file })
  ids.set(p, doc.id)
  alts.set(p, alt)
  log(`uploaded ${path.relative(pub, file)}`)
  return doc.id
}
// Only store a description on the usage when it differs from the file's own.
const altFor = (p: string, alt: string) => (alts.get(p) === alt ? undefined : alt)

const shot = async (s?: Shot | HowVisual) => {
  if (!s) return { kind: 'none' }
  if (s.kind === 'slot') return { kind: 'slot', slotLabel: s.label, spec: s.spec, ratio: s.ratio, blur: !!s.blur }
  if (s.kind === 'device' && !s.img) return { kind: 'device', wire: s.wire, alt: s.alt }
  const image = await media(s.img, s.alt)
  return { kind: s.kind, image, alt: altFor(s.img, s.alt), ...(s.kind === 'device' ? { wire: s.wire } : {}) }
}
const colour = (field: string) => (field.includes('lime') ? 'lime' : field.includes('green') ? 'green' : 'light')
const pairs = (rows: [string, string][]) => rows.map(([label, value]) => ({ label, value }))

for (const c of cases) {
  const star = c.front.star
  const v = c.chapter.visual
  const data = {
    name: c.name,
    slug: c.slug,
    colour: colour(c.field),
    title: c.title,
    summary: c.summary,
    facts: pairs(c.facts),
    mast: c.front.mast,
    struck: c.front.struck,
    coverTitle: c.front.title,
    lines: pairs(c.front.lines),
    star:
      star.kind === 'device'
        ? {
            kind: 'device',
            wire: star.wire,
            image: star.img ? await media(star.img, star.alt) : undefined,
            alt: star.img ? altFor(star.img, star.alt) : star.alt,
            caption: star.caption,
            notes: star.notes,
          }
        : { kind: 'comp', image: await media(star.img, star.alt), alt: altFor(star.img, star.alt) },
    chapterBody: c.chapter.body,
    chapterVisual:
      v.kind === 'wire'
        ? { kind: 'wire', wire: v.wire, alt: v.alt, note: v.note }
        : v.kind === 'screens'
          ? { kind: 'screens', screens: await Promise.all(v.screens.map(async (s) => ({ image: await media(s.img, s.alt), alt: altFor(s.img, s.alt) }))) }
          : { kind: 'image', image: await media(v.img, v.alt), alt: altFor(v.img, v.alt) },
    sections: await Promise.all(c.sections.map(async (s) => ({ heading: s.heading, body: s.body.join('\n\n'), shot: await shot(s.shot) }))),
    closing: c.closing
      ? { heading: c.closing.heading, body: c.closing.body.join('\n\n'), shot: await shot(c.closing.shot) }
      : { shot: { kind: 'none' } },
    _status: 'published' as const,
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await payload.create({ collection: 'cases', data: data as any })
  log(`case ${c.name}`)
}

await payload.updateGlobal({
  slug: 'home',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: {
    lines: home.hero.lines.map((text) => ({ text })),
    lead: home.hero.lead,
    cta: home.hero.cta,
    ticker: home.ticker.map((text) => ({ text })),
    seoTitle: home.seo.title,
    seoDescription: home.seo.description,
    statement: home.statement,
    work: home.work,
    sites: {
      title: home.sites.title,
      text: home.sites.text,
      items: await Promise.all(home.sites.items.map(async (s) => ({ image: await media(s.img, s.alt), name: s.name, alt: altFor(s.img, s.alt) }))),
    },
    how: {
      bar: home.how.bar,
      title: home.how.title,
      rows: await Promise.all(home.how.rows.map(async (r) => ({ word: r.word, text: r.text, visual: await shot(r.visual) }))),
    },
    years: home.years,
    about: {
      bar: home.about.bar,
      title: home.about.title,
      portrait: await media(home.about.portrait.img, home.about.portrait.alt),
      paragraphs: home.about.paragraphs.join('\n\n'),
      extra: await shot(home.about.extra),
    },
    _status: 'published',
  } as any,
})
log('home page')

await payload.updateGlobal({
  slug: 'orbit',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: {
    tiles: await Promise.all(
      tiles.map(async (t) => ({
        kind: t.kind,
        label: t.label,
        file: t.kind === 'wire' ? undefined : await media(t.src, t.label),
        poster: t.poster ? await media(t.poster, `${t.label}, still`) : undefined,
        wire: t.kind === 'wire' ? t.src : undefined,
        ring: t.ring === 1 ? 'inner' : 'outer',
        angle: t.a,
        height: t.y,
        desktopOnly: !!t.desk,
      })),
    ),
    _status: 'published',
  } as any,
})
log('hero orbit')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
await payload.updateGlobal({ slug: 'contact', data: { ...contact, _status: 'published' } as any })
log('contact')

const email = process.env.SEED_EMAIL
if (email && process.env.SEED_PASSWORD) {
  const { totalDocs: people } = await payload.count({ collection: 'users', where: { email: { equals: email } } })
  if (!people) {
    await payload.create({
      collection: 'users',
      data: { email, password: process.env.SEED_PASSWORD, enableAPIKey: !!process.env.SEED_API_KEY, apiKey: process.env.SEED_API_KEY },
    })
    log(`person ${email}`)
  }
}
log('done')
process.exit(0)
