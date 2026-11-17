import type { Field, GroupField, SelectField } from 'payload'

// The redrawn wireframes that live in the site's code (src/wire). A screen can draw itself as one of these.
export const wireOptions = [
  { label: 'adidas store app, bulk scan (redrawn)', value: 'adidas-bulkscan' },
  { label: 'ATHLIQ, day score', value: 'athliq-today' },
  { label: 'ATHLIQ, food diary', value: 'athliq-diary' },
  { label: 'ATHLIQ, workout player', value: 'athliq-player' },
  { label: 'ATHLIQ, recovery', value: 'athliq-recovery' },
]

export const wireField = (overrides: Partial<SelectField> = {}): SelectField => ({
  name: 'wire',
  label: 'Wireframe',
  type: 'select',
  options: wireOptions,
  admin: { description: 'The sketch this screen draws itself from.' },
  ...overrides,
} as SelectField)

export const altField: Field = {
  name: 'alt',
  label: 'Description',
  type: 'text',
  admin: { description: "Leave empty to use the file's own description." },
}

// A section bar: "01 / Work" with a short line on the right.
export const barField = (description = 'The numbered bar that opens this section.'): GroupField => ({
  name: 'bar',
  label: 'Section bar',
  type: 'group',
  admin: { description },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'label', type: 'text', required: true, admin: { width: '40%' } },
        { name: 'meta', label: 'Right side', type: 'text', admin: { width: '60%' } },
      ],
    },
  ],
})

const ratios = ['3 / 2', '16 / 9', '16 / 10', '4 / 3', '1 / 1', '9 / 16'].map((r) => ({ label: r.replace(/ /g, ''), value: r }))

// One visual: an image, an app screen that draws from its wireframe, or a placeholder for a shot to make.
export const shotField = (name: string, label: string, opts: { phone?: boolean; optional?: boolean } = {}): GroupField => {
  const kinds = [
    ...(opts.optional ? [{ label: 'Nothing', value: 'none' }] : []),
    { label: 'Image', value: 'image' },
    { label: 'App screen, draws from its sketch', value: 'device' },
    ...(opts.phone ? [{ label: 'Phone', value: 'phone' }] : []),
    { label: 'Placeholder for a shot I still have to make', value: 'slot' },
  ]
  const is = (...k: string[]) => (_: unknown, sib: { kind?: string }) => k.includes(sib?.kind ?? '')
  return {
    name,
    label,
    type: 'group',
    fields: [
      { name: 'kind', label: 'Type', type: 'select', options: kinds, defaultValue: opts.optional ? 'none' : 'image', required: true },
      {
        name: 'image',
        label: 'File',
        type: 'upload',
        relationTo: 'media',
        admin: { condition: is('image', 'device', 'phone') },
        validate: (v: unknown, { siblingData }: { siblingData: { kind?: string } }) =>
          ['image', 'phone'].includes(siblingData?.kind ?? '') && !v ? 'Choose a file' : true,
      },
      { ...wireField(), admin: { condition: is('device'), description: 'The sketch this screen draws itself from.' } },
      { name: 'alt', label: 'Description', type: 'text', admin: { condition: is('image', 'device', 'phone'), description: "Leave empty to use the file's own description." } },
      {
        type: 'row',
        admin: { condition: is('slot') },
        fields: [
          { name: 'slotLabel', label: 'What the shot is', type: 'text', admin: { width: '50%' } },
          { name: 'spec', label: 'Spec', type: 'text', admin: { width: '50%' } },
        ],
      },
      {
        type: 'row',
        admin: { condition: is('slot') },
        fields: [
          { name: 'ratio', type: 'select', options: ratios, defaultValue: '3 / 2', admin: { width: '50%' } },
          { name: 'blur', label: 'Blur names and data', type: 'checkbox', admin: { width: '50%' } },
        ],
      },
    ],
  }
}

// Paragraphs as one text box: a blank line starts a new paragraph.
export const paragraphsField = (name: string, label: string, required = true): Field => ({
  name,
  label,
  type: 'textarea',
  required,
  admin: { description: 'Leave a blank line between paragraphs.', rows: 6 },
})
