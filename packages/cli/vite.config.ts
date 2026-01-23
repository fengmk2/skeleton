import tsdownConfig from './tsdown.config.js';

import { defineConfig } from 'vite-plus';
import { join } from 'node:path';

export default defineConfig({
	lib: tsdownConfig,
	test: {
		dir: join(import.meta.dirname, 'test'),
		isolate: false,
	},
});
