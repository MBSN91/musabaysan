import type { CollectionConfig } from 'payload'

import { signedIn } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Person', plural: 'People' },
  admin: { useAsTitle: 'email', group: 'Settings', description: 'Who can sign in. The site build signs in with an API key.' },
  access: { read: signedIn, create: signedIn, update: signedIn, delete: signedIn },
  auth: { useAPIKey: true },
  fields: [],
}
