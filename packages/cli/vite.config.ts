import { defineConfig } from 'vite-plus';
import { join } from 'node:path';

export default defineConfig({
	pack: {
		deps: { resolveDepSubpath: true },
		logLevel: 'error',
	},
	test: {
		// Vitest v4 compatibility: preserve mock call history.
		// Remove after tests no longer rely on calls from setup or earlier tests.
		// https://rfc-vitest-v5-upgrade-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
		// https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
		clearMocks: false,
		dir: join(import.meta.dirname, 'test'),
		isolate: false,
	},
});
