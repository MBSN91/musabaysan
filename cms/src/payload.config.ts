import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Cases } from './collections/Cases'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Contact } from './globals/Contact'
import { Home } from './globals/Home'
import { Orbit } from './globals/Orbit'
import { migrations } from './migrations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// The content editor for musabaysan.nl. The site itself is the Astro project one folder up; its build pulls
// the published content from here (scripts/pull-content.mjs). See README.md.
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: ' · musabaysan.nl' },
    components: { beforeDashboard: ['/components/PublishNote#PublishNote'] },
  },
  collections: [Cases, Media, Users],
  globals: [Home, Orbit, Contact],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  // Locally the schema follows the config by itself; in production it only changes through migrations.
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URL || '' }, prodMigrations: migrations }),
  sharp,
  telemetry: false,
  // Files go to a Cloudflare R2 bucket (S3-compatible) when one is set, else to ./media.
  // Uploads go straight from the browser to the bucket, so videos are not stopped by the host's request limit.
  plugins: [
    s3Storage({
      enabled: Boolean(process.env.S3_BUCKET),
      // Downloads redirect to a short-lived bucket link, so big videos never pass through Vercel's 4.5 MB limit
      collections: { media: { signedDownloads: { expiresIn: 3600 } } },
      bucket: process.env.S3_BUCKET || '',
      clientUploads: true,
      config: {
        credentials: { accessKeyId: process.env.S3_ACCESS_KEY_ID || '', secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '' },
        region: process.env.S3_REGION || 'auto',
        endpoint: process.env.S3_ENDPOINT || undefined,
        forcePathStyle: true,
        // Cloudflare R2 rejects the extra checksums newer AWS SDKs add by default
        requestChecksumCalculation: 'WHEN_REQUIRED',
        responseChecksumValidation: 'WHEN_REQUIRED',
      },
    }),
  ],
})
