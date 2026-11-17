import type { GlobalConfig } from 'payload'

import { signedIn } from '../access'
import { barField, paragraphsField, shotField } from '../fields/shared'
import { rebuildGlobalOnPublish } from '../hooks/publish'

// Everything on the home page except the case chapters (those come from Case studies, in their order)
// and the orbit of work in the hero (its own page under Home page).
export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home page',
  access: { read: signedIn, update: signedIn },
  versions: { drafts: true, max: 30 },
  admin: { group: 'Pages', description: 'Edit, then Publish. The site rebuilds with the change in about 2 minutes.' },
  hooks: { afterChange: [rebuildGlobalOnPublish] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'lines',
              label: 'Headline',
              type: 'array',
              minRows: 1,
              maxRows: 3,
              labels: { singular: 'Line', plural: 'Lines' },
              admin: { description: 'One line per row. It builds itself letter by letter.' },
              fields: [{ name: 'text', type: 'text', required: true }],
            },
            { name: 'lead', label: 'Intro', type: 'textarea', required: true },
            { name: 'cta', label: 'Button', type: 'text', required: true, admin: { description: 'Opens an email to the address under Contact.' } },
            {
              name: 'ticker',
              label: 'Ticker',
              type: 'array',
              labels: { singular: 'Item', plural: 'Items' },
              admin: { description: 'The line that runs along the bottom of the hero.' },
              fields: [{ name: 'text', type: 'text', required: true }],
            },
            { name: 'seoTitle', label: 'Page title', type: 'text', required: true, admin: { description: 'For search engines and the browser tab.' } },
            { name: 'seoDescription', label: 'Search description', type: 'textarea', required: true },
          ],
        },
        {
          label: 'Intro and work',
          fields: [
            { name: 'statement', label: 'Statement', type: 'textarea', required: true, admin: { description: 'The big paragraph right under the hero.' } },
            {
              name: 'work',
              label: 'Work section',
              type: 'group',
              fields: [barField(), { name: 'title', type: 'text', required: true }],
            },
            {
              name: 'sites',
              label: 'Websites',
              type: 'group',
              admin: { description: 'After the case chapters.' },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'text', type: 'textarea', required: true },
                {
                  name: 'items',
                  label: 'Websites',
                  type: 'array',
                  labels: { singular: 'Website', plural: 'Websites' },
                  fields: [
                    { name: 'image', label: 'File', type: 'upload', relationTo: 'media', required: true },
                    { name: 'name', label: 'Caption', type: 'text', required: true },
                    { name: 'alt', label: 'Description', type: 'text', admin: { description: "Leave empty to use the file's own description." } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'How I work',
          fields: [
            {
              name: 'how',
              label: false,
              type: 'group',
              fields: [
                barField(),
                { name: 'title', type: 'text', required: true },
                {
                  name: 'rows',
                  type: 'array',
                  labels: { singular: 'Step', plural: 'Steps' },
                  fields: [
                    { name: 'word', label: 'Big word', type: 'text', required: true },
                    { name: 'text', type: 'textarea', required: true },
                    shotField('visual', 'Visual', { phone: true, optional: true }),
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Timeline',
          fields: [
            {
              name: 'years',
              label: false,
              type: 'group',
              fields: [
                barField(),
                { name: 'title', type: 'text', required: true },
                {
                  name: 'items',
                  label: 'Moments',
                  type: 'array',
                  labels: { singular: 'Moment', plural: 'Moments' },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        { name: 'year', type: 'text', required: true, admin: { width: '20%' } },
                        { name: 'title', type: 'text', required: true, admin: { width: '80%' } },
                      ],
                    },
                    { name: 'text', type: 'textarea', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'About',
          fields: [
            {
              name: 'about',
              label: false,
              type: 'group',
              fields: [
                barField(),
                { name: 'title', type: 'text', required: true },
                { name: 'portrait', type: 'upload', relationTo: 'media', required: true },
                { name: 'portraitAlt', label: 'Portrait description', type: 'text', admin: { description: "Leave empty to use the file's own description." } },
                paragraphsField('paragraphs', 'Text'),
                shotField('extra', 'Below the text', { optional: true }),
              ],
            },
          ],
        },
      ],
    },
  ],
}
