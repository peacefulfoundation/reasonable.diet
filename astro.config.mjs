import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://reasonable-diet.abhigyantrips.dev',
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
  output: 'static',
});
