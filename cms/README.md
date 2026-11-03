# musabaysan.nl editor (Payload CMS)

The content editor for musabaysan.nl. The site itself stays the Astro project one folder up, with all its animation code; this app only holds the content.

## How it fits together

1. You edit in the admin (`/admin`): case studies, the home page, the hero orbit, contact and footer, and images and videos.
2. **Save draft** keeps a change here only. **Publish** calls the Netlify build hook.
3. Netlify runs `npm run build` in the site. `scripts/pull-content.mjs` signs in with an API key and downloads the published content into `src/data/cms.json` and every file it uses into `public/cms/`. Then `astro build` runs.
4. The new site is live about 2 minutes after you press Publish. The site stays fully static and doesn't depend on the CMS at runtime.

Without `CMS_URL`, the site builds from the built-in defaults in `src/data/work.ts`, `home.ts` and `orbit.ts`. That's how deploy previews and local work run. With `CMS_URL` set, any pull failure stops the build, so a half-pulled site never deploys and the last good version stays live.

## What lives where

| In the editor | On the site |
| --- | --- |
| Case studies (drag to reorder) | `/work/<slug>/` and the chapters in the home reel, in this order |
| Home page | Hero text, ticker, statement, websites, How I work, timeline, about |
| Hero orbit | The tiles circling the headline: type, file, ring, angle, height, desktop only |
| Contact and footer | The footer on every page |
| Images and videos | Every file. Images get web, phone and phone@2x sizes in WebP on upload |

The animations, layout and wireframes (`src/wire/*.svg`) stay in code. A new wireframe needs a code change, which then adds it to the wireframe list in `src/fields/shared.ts`.

## Run it locally

Needs Node 24 (`nvm use 24`) and Postgres. Locally that's a podman container:

```sh
podman start mbsn-cms-pg   # created once with: podman run -d --name mbsn-cms-pg -e POSTGRES_PASSWORD=... -e POSTGRES_DB=musabaysan -v mbsn-cms-pg:/var/lib/postgresql/data -p 127.0.0.1:5439:5432 docker.io/library/postgres:17
cp .env.example .env       # fill in DATABASE_URL and PAYLOAD_SECRET
npm install
npm run dev                # http://localhost:3000/admin
```

To build the site from your local CMS: `CMS_URL=http://localhost:3000 CMS_API_KEY=<key> npm run build` in the site folder. The API key is on your user under People, under "Enable API key".

## First run on an empty database

`npm run seed` fills the editor with the site's current content and uploads its images from `../public`. It stops if case studies already exist. To also create the first login and the build's API key, set `SEED_EMAIL`, `SEED_PASSWORD` and `SEED_API_KEY`.

## Changing the content model

Edit the collections in `src/collections` or the globals in `src/globals`. Then:

```sh
npm run generate:types
npm run generate:importmap
npm run payload migrate:create <name>   # production only changes schema through migrations
```

Then update `scripts/pull-content.mjs` and the types in `src/data/*.ts` in the site to match.

## Hosting (to set up): free tiers only

Every visitor gets the files from Netlify, because the build copies them into the site. The bucket and the database only serve the editor and the build, so traffic stays tiny.

- **App:** Vercel Hobby (free, for personal use), with this folder (`cms`) as the root directory and Node 24.
- **Database:** Neon Free (1 GB per project, scales to zero when idle and wakes in under a second; the content is a few MB). Create it from the Vercel project's Storage tab so `DATABASE_URL` is filled in. Use the pooled connection string. Migrations run on start in production.
- **Files:** Cloudflare R2 (10 GB free, no fees for downloads). Set `S3_BUCKET`, `S3_ENDPOINT=https://<account id>.r2.cloudflarestorage.com`, `S3_REGION=auto`, and the access key pair from an R2 API token scoped to this bucket with Object Read & Write. Uploads go straight from the browser to the bucket (Vercel caps request bodies at 4.5 MB), so add a CORS rule on the bucket allowing `PUT` and `GET` from the CMS domain.
- **Environment (Vercel):** `DATABASE_URL`, `PAYLOAD_SECRET`, `NETLIFY_BUILD_HOOK`, `S3_BUCKET`, `S3_ENDPOINT`, `S3_REGION`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`.
- **Netlify (the site):** `CMS_URL` (the CMS address) and `CMS_API_KEY`. Then create a build hook for the production branch and paste it into `NETLIFY_BUILD_HOOK`. Each Publish is one production deploy. Netlify accounts from before September 2025 stay on a legacy plan without per-deploy charges (check under Usage & billing, and don't switch plans). The newer credit plans charge 15 of their 300 free monthly credits per deploy, which is about 20 publishes a month.

Not chosen: Payload on Cloudflare Workers with D1 needs the paid Workers plan ($5 a month) because of its bundle size. Supabase storage is too expensive for large files.
