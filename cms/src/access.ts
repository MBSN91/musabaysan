import type { Access } from 'payload'

// The CMS is private: only signed-in people (and the site build, with its API key) can read or change anything.
export const signedIn: Access = ({ req }) => Boolean(req.user)
export const privateAccess = { read: signedIn, create: signedIn, update: signedIn, delete: signedIn }
