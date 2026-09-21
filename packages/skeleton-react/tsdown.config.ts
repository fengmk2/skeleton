import { defineConfig } from 'vite-plus/pack';

export default defineConfig({ deps: { resolveDepSubpath: true }, logLevel: 'error', copy: ['src/index.css'] });
