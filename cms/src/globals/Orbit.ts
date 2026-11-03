import type { GlobalConfig } from 'payload'

import { signedIn } from '../access'
import { wireField } from '../fields/shared'
import { rebuildGlobalOnPublish } from '../hooks/publish'

// The field of work that circles the headline. Two rings turn in opposite directions; each tile has a
// starting angle on its ring and a height. Tiles passing behind the words fade back on their own.
export const Orbit: GlobalConfig = {
  slug: 'orbit',
  label: 'Hero orbit',
  access: { read: signedIn, update: signedIn },
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description: 'The work circling the headline. Spread tiles around the ring (angles 0 to 359) and mix heights above and below the words. About 15 tiles works best; phones show the ones not marked desktop only.',
  },
  hooks: { afterChange: [rebuildGlobalOnPublish] },
  fields: [
    {
      name: 'tiles',
      type: 'array',
      labels: { singular: 'Tile', plural: 'Tiles' },
      admin: { components: { RowLabel: '/components/TileLabel#TileLabel' } },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'kind',
              label: 'Type',
              type: 'select',
              required: true,
              defaultValue: 'site',
              admin: { width: '40%' },
              options: [
                { label: 'App screen', value: 'phone' },
                { label: 'Screen recording (video)', value: 'video' },
                { label: 'Website screenshot', value: 'site' },
                { label: 'Cut-out image (devices, several screens)', value: 'comp' },
                { label: 'Redrawn wireframe', value: 'wire' },
              ],
            },
            { name: 'label', type: 'text', required: true, admin: { width: '60%', description: 'Shown on hover.' } },
          ],
        },
        { name: 'file', type: 'upload', relationTo: 'media', admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind !== 'wire' }, validate: (v: unknown, { siblingData }: { siblingData: { kind?: string } }) => (siblingData?.kind !== 'wire' && !v ? 'Choose a file' : true) },
        { name: 'poster', label: 'Still frame', type: 'upload', relationTo: 'media', admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'video', description: 'Shown before the video plays.' } },
        { ...wireField(), admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'wire' } },
        {
          type: 'row',
          fields: [
            { name: 'ring', type: 'select', required: true, defaultValue: 'outer', options: [{ label: 'Outer ring', value: 'outer' }, { label: 'Inner ring', value: 'inner' }], admin: { width: '25%' } },
            { name: 'angle', type: 'number', required: true, min: 0, max: 359, defaultValue: 0, admin: { width: '25%', description: '0 is nearest to you.' } },
            { name: 'height', type: 'number', required: true, min: -40, max: 40, defaultValue: 0, admin: { width: '25%', description: 'Minus is above the words.' } },
            { name: 'desktopOnly', label: 'Desktop only', type: 'checkbox', admin: { width: '25%' } },
          ],
        },
      ],
    },
  ],
}
