import { defineConfig } from 'vite-plus';
import { join } from 'node:path';

export default defineConfig({
	pack: {
		logLevel: 'error',
	},
	test: {
		dir: join(import.meta.dirname, 'test'),
		isolate: false,
	},
});
