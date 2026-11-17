import type { CollectionConfig } from 'payload'

import { privateAccess } from '../access'

// Every image and video on the site. Sizes are made on upload: `web` for most uses, `phone` and `phone2x`
// for app screens inside the phone frames (upload raw screen captures, 9:20, e.g. 1080 x 2400, not store images). Videos are used as they are: keep them short, muted and small.
export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'File', plural: 'Images and videos' },
  access: privateAccess,
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'updatedAt'],
    description: 'Describe what is in each file; screen readers read it out to people who cannot see it.',
  },
  fields: [{ name: 'alt', label: 'Description', type: 'text', required: true }],
  upload: {
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/avif', 'video/mp4', 'video/webm'],
    adminThumbnail: 'phone',
    focalPoint: true,
    imageSizes: [
      { name: 'web', width: 2400, withoutEnlargement: true, formatOptions: { format: 'webp', options: { quality: 86 } } },
      { name: 'phone', width: 640, withoutEnlargement: true, formatOptions: { format: 'webp', options: { quality: 86 } } },
      { name: 'phone2x', width: 1080, withoutEnlargement: true, formatOptions: { format: 'webp', options: { quality: 86 } } },
    ],
  },
}
