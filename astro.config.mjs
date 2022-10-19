import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import react from '@astrojs/react';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  output: "server",
  adapter: netlify()
});