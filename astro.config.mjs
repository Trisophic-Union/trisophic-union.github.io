// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // its just the way gitlab works.
  outDir: 'dist',

  publicDir: 'public',

  vite: {
    plugins: [tailwindcss()],
  },
});
