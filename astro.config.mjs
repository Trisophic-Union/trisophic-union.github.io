// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // its just the way gitlab works.
    outDir: 'public',
    publicDir: 'static',
});
