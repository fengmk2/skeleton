import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
	lint: {
		plugins: ['typescript', 'unicorn', 'react', 'react-perf', 'oxc', 'import'],
		categories: {
			correctness: 'error',
		},
		overrides: [
			{
				files: ['*.svelte'],
				rules: {
					'no-unassigned-vars': 'off',
				},
			},
		],
	},
	test: {
		projects: ['packages/*'],
	},
});
