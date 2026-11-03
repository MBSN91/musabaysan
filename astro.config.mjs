import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';



// https://astro.build/config
export default defineConfig({
	// applyBaseStyles: false keeps Tailwind out of the holding page (plain CSS in src/styles).
	// Set it back to true if the pages in src/legacy return to src/pages.
	integrations: [tailwind({ applyBaseStyles: false }), react()],
	output: 'server',
	adapter: netlify(),
});
