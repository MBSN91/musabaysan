import type { GlobalConfig } from 'payload'

import { signedIn } from '../access'
import { barField } from '../fields/shared'
import { rebuildGlobalOnPublish } from '../hooks/publish'

// The contact footer on every page.
export const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact and footer',
  access: { read: signedIn, update: signedIn },
  versions: { drafts: true, max: 30 },
  admin: { group: 'Pages', description: 'The footer on every page.' },
  hooks: { afterChange: [rebuildGlobalOnPublish] },
  fields: [
    barField('The numbered bar, on the home page only. Leave the right side empty to show the email address.'),
    { name: 'title', label: 'Big line', type: 'text', required: true },
    { name: 'lead', label: 'Text', type: 'textarea', required: true },
    { name: 'email', type: 'email', required: true },
    {
      type: 'row',
      fields: [
        { name: 'linkedin', label: 'LinkedIn address', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'linkedinLabel', label: 'LinkedIn shown as', type: 'text', required: true, admin: { width: '50%' } },
      ],
    },
    { name: 'basedIn', label: 'Based in', type: 'text', required: true },
    { name: 'small', label: 'Small print', type: 'text', required: true },
  ],
}
