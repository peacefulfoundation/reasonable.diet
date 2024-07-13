import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://reasonable-diet.abhigyantrips.dev',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
    solidJs({ devtools: true }),
  ],
  redirects: {
    '/recipes': '/recipes/1',
    '/cook': '/recipes/1',
  },
});
