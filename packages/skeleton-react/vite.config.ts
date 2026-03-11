import react from '@vitejs/plugin-react';
import { playwright } from 'vite-plus/test/browser-playwright';
import { defineConfig } from 'vite-plus';
import { join } from 'node:path';

export default defineConfig({
	pack: {
		logLevel: 'error',
		copy: ['src/index.css'],
	},
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
