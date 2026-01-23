import tsdownConfig from './tsdown.config.js';

import react from '@vitejs/plugin-react';
import { playwright } from 'vite-plus/test/browser-playwright';
import { defineConfig } from 'vite-plus';
import { join } from 'node:path';

export default defineConfig({
	lib: tsdownConfig,
	plugins: [react()],
	test: {
		dir: join(import.meta.dirname, 'test'),
		browser: {
			enabled: true,
			provider: playwright(),
			headless: true,
			screenshotFailures: false,
			instances: [{ browser: 'chromium' }],
		},
	},
});
