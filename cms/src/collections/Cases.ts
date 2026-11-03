import type { CollectionConfig } from 'payload'

import { privateAccess } from '../access'
import { paragraphsField, shotField, wireField } from '../fields/shared'
import { rebuildOnDelete, rebuildOnPublish } from '../hooks/publish'

const factRows = (name: string, label: string, description: string, maxRows?: number) => ({
  name,
  label,
  type: 'array' as const,
  labels: { singular: 'Fact', plural: 'Facts' },
  admin: { description, initCollapsed: false },
  ...(maxRows ? { minRows: maxRows, maxRows } : {}),
  fields: [
    {
      type: 'row' as const,
      fields: [
        { name: 'label', type: 'text' as const, required: true, admin: { width: '35%' } },
        { name: 'value', type: 'text' as const, required: true, admin: { width: '65%' } },
      ],
    },
  ],
})

// One case study: its page on /work/<slug>/ and its chapter in the home reel. Drag to reorder.
export const Cases: CollectionConfig = {
  slug: 'cases',
  labels: { singular: 'Case study', plural: 'Case studies' },
  orderable: true,
  access: privateAccess,
  versions: { drafts: true, maxPerDoc: 30 },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', '_status', 'updatedAt'],
    description: 'Each case gets a page and a chapter on the home page, in this order. Drag rows to reorder.',
  },
  hooks: { afterChange: [rebuildOnPublish], afterDelete: [rebuildOnDelete] },
  fields: [
    { name: 'name', type: 'text', required: true, admin: { description: 'Short name, for example ATHLIQ.' } },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { position: 'sidebar', description: 'The page address: musabaysan.nl/work/<this>/' },
      validate: (v: unknown) => (typeof v === 'string' && /^[a-z0-9-]+$/.test(v) ? true : 'Use lowercase letters, numbers and dashes'),
    },
    {
      name: 'colour',
      type: 'select',
      required: true,
      defaultValue: 'lime',
      options: [
        { label: 'Lime', value: 'lime' },
        { label: 'Green', value: 'green' },
        { label: 'Light', value: 'light' },
      ],
      admin: { position: 'sidebar', description: 'The colour of its chapter and cover.' },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basics',
          fields: [
            { name: 'title', type: 'text', required: true, admin: { description: 'The outcome, in a few words. Used on the home chapter and the next-case link.' } },
            { name: 'summary', type: 'textarea', required: true, admin: { description: 'The opening paragraph of the case page.' } },
            factRows('facts', 'Facts', 'Listed under the summary. Facts already on the cover are left out there. Keep a "Years" fact: the home chapter shows it.'),
          ],
        },
        {
          label: 'Cover',
          description: 'The first screen of the case page: the name set huge, the work rising through it, the outcome and three facts.',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'mast', label: 'Big word', type: 'text', required: true, admin: { width: '50%', description: 'Set across the full width. A leading number counts up, e.g. 1.5 min.' } },
                { name: 'struck', label: 'Struck-through before', type: 'text', admin: { width: '50%', description: 'Optional, e.g. 5 to 8 min.' } },
              ],
            },
            { name: 'coverTitle', label: 'Cover title', type: 'text', required: true },
            factRows('lines', 'Cover facts', 'Exactly three, bottom right. A leading count rolls in; years do not.', 3),
            {
              name: 'star',
              label: 'The work on the cover',
              type: 'group',
              fields: [
                {
                  name: 'kind',
                  label: 'Type',
                  type: 'select',
                  required: true,
                  defaultValue: 'device',
                  options: [
                    { label: 'App screen in a phone', value: 'device' },
                    { label: 'Wide image (several screens)', value: 'comp' },
                  ],
                },
                { ...wireField(), admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'device', description: 'The sketch the screen draws from. With no file below, only the sketch shows (used for confidential work).' } },
                { name: 'image', label: 'File', type: 'upload', relationTo: 'media' },
                { name: 'alt', label: 'Description', type: 'text', admin: { description: "Leave empty to use the file's own description. Needed when there is only a sketch." } },
                { name: 'caption', type: 'text', admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'device', description: 'Shown under a sketch-only phone.' } },
                {
                  name: 'notes',
                  label: 'Spec notes',
                  type: 'array',
                  admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'device', description: 'Little labels pointing at the screen. x and y are percentages of the screen.' },
                  fields: [
                    { name: 'text', type: 'text', required: true },
                    {
                      type: 'row',
                      fields: [
                        { name: 'x', type: 'number', required: true, min: 0, max: 100, admin: { width: '33%' } },
                        { name: 'y', type: 'number', required: true, min: 0, max: 100, admin: { width: '33%' } },
                        { name: 'side', type: 'select', required: true, defaultValue: 'r', options: [{ label: 'Right', value: 'r' }, { label: 'Left', value: 'l' }], admin: { width: '34%' } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Home chapter',
          description: 'Its chapter in the home reel. The big word from the cover runs along the bottom.',
          fields: [
            { name: 'chapterBody', label: 'Text', type: 'textarea', required: true, admin: { description: 'Put a number in [brackets] to make it count up, e.g. "in alpha with [20] active users".' } },
            {
              name: 'chapterVisual',
              label: 'Visual',
              type: 'group',
              fields: [
                {
                  name: 'kind',
                  label: 'Type',
                  type: 'select',
                  required: true,
                  defaultValue: 'screens',
                  options: [
                    { label: 'Phone with screens that slide in', value: 'screens' },
                    { label: 'Phone with a sketch only', value: 'wire' },
                    { label: 'Wide image', value: 'image' },
                  ],
                },
                {
                  name: 'screens',
                  type: 'array',
                  labels: { singular: 'Screen', plural: 'Screens' },
                  admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'screens', description: 'In order; each slides up over the last as you scroll.' },
                  fields: [
                    { name: 'image', label: 'File', type: 'upload', relationTo: 'media', required: true },
                    { name: 'alt', label: 'Description', type: 'text', admin: { description: "Leave empty to use the file's own description." } },
                  ],
                },
                { ...wireField(), admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'wire' } },
                { name: 'image', label: 'File', type: 'upload', relationTo: 'media', admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'image' } },
                { name: 'alt', label: 'Description', type: 'text', admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind !== 'screens', description: "Leave empty to use the file's own description." } },
                { name: 'note', type: 'text', admin: { condition: (_: unknown, s: { kind?: string }) => s?.kind === 'wire', description: 'Small print under the phone.' } },
              ],
            },
          ],
        },
        {
          label: 'Story',
          fields: [
            {
              name: 'sections',
              type: 'array',
              labels: { singular: 'Part', plural: 'Parts' },
              admin: { description: 'The case story, part by part. Text and visual swap sides every other part.' },
              fields: [
                { name: 'heading', type: 'text', required: true },
                paragraphsField('body', 'Text'),
                shotField('shot', 'Visual', { optional: true }),
              ],
            },
            {
              name: 'closing',
              label: 'Closing part',
              type: 'group',
              admin: { description: 'Optional last part that keeps the text on the left. Leave the heading empty to skip it.' },
              fields: [
                { name: 'heading', type: 'text' },
                paragraphsField('body', 'Text', false),
                shotField('shot', 'Visual', { optional: true }),
              ],
            },
          ],
        },
      ],
    },
  ],
}
