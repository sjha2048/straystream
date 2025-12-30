import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    react(),
    markdoc(),
    tailwind(),
    keystatic(),
    sitemap(),
  ],
  site: 'https://straystream.com', // Update with your domain
});
