import { defineConfig } from '@voidzero-dev/vite-plus';
import { join } from 'node:path';

export default defineConfig({
	test: {
		dir: join(import.meta.dirname, 'test'),
		isolate: false,
	},
});
