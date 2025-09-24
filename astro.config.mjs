import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image'; // Import the image integration

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image()]
});