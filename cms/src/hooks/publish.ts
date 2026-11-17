import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'

// Publishing rebuilds the site: Netlify's build hook pulls the published content and deploys it (about 2 minutes).
// Saving a draft does nothing to the live site.
const rebuild = async (why: string, log: { info: (m: string) => void; error: (m: string) => void }) => {
  const hook = process.env.NETLIFY_BUILD_HOOK
  if (!hook) {
    log.info(`[publish] ${why}: no NETLIFY_BUILD_HOOK set, so the site was not rebuilt`)
    return
  }
  try {
    const res = await fetch(`${hook}?trigger_title=${encodeURIComponent(`CMS: ${why}`)}`, { method: 'POST' })
    log.info(`[publish] ${why}: site rebuild requested (${res.status})`)
  } catch (e) {
    log.error(`[publish] ${why}: could not reach the build hook: ${(e as Error).message}`)
  }
}

const published = (doc?: { _status?: string }) => doc?._status === 'published'

export const rebuildOnPublish: CollectionAfterChangeHook = async ({ doc, previousDoc, collection, req }) => {
  if (published(doc) || published(previousDoc)) await rebuild(`${collection.slug} "${doc?.name ?? doc?.id}"`, req.payload.logger)
  return doc
}

export const rebuildOnDelete: CollectionAfterDeleteHook = async ({ doc, collection, req }) => {
  if (published(doc)) await rebuild(`${collection.slug} "${doc?.name ?? doc?.id}" deleted`, req.payload.logger)
  return doc
}

export const rebuildGlobalOnPublish: GlobalAfterChangeHook = async ({ doc, previousDoc, global, req }) => {
  if (published(doc) || published(previousDoc)) await rebuild(global.slug, req.payload.logger)
  return doc
}
