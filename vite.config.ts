import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'*': 'vp check --fix',
	},
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
		options: {
			typeAware: true,
			typeCheck: false,
		},
	},
	fmt: {
		printWidth: 140,
		singleQuote: true,
		useTabs: true,
		sortPackageJson: false,
		ignorePatterns: ['.changeset/*.md', 'pnpm-lock.yaml'],
	},
	test: {
		projects: ['packages/*'],
	},
});
