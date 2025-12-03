import { globSync } from 'node:fs';
import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
	logLevel: 'error',
	build: {
		cssCodeSplit: true,
		cssMinify: false,
		lib: {
			formats: ['es'],
			entry: ['src/index.css', ...globSync('src/themes/*.css')],
		},
	},
});
