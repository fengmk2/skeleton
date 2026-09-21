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
		ignorePatterns: ['**/database.types.ts'],
		overrides: [
			{
				files: ['*.svelte'],
				rules: {
					'no-unassigned-vars': 'off',
				},
				globals: {
					$state: 'readonly',
					$derived: 'readonly',
					$effect: 'readonly',
					$props: 'readonly',
					$bindable: 'readonly',
					$inspect: 'readonly',
					$host: 'readonly',
				},
			},
		],
		options: {
			typeAware: true,
		},
		jsPlugins: [
			{
				name: 'vite-plus',
				specifier: 'vite-plus/oxlint-plugin',
			},
		],
		rules: {
			'vite-plus/prefer-vite-plus-imports': 'error',
			// Preserve the existing lint baseline for React examples and playgrounds.
			'react/preserve-manual-memoization': 'off',
			'react/refs': 'off',
			'react/immutability': 'off',
			'react/set-state-in-effect': 'off',
		},
	},
	fmt: {
		printWidth: 140,
		singleQuote: true,
		useTabs: true,
		sortPackageJson: false,
		svelte: {},
		ignorePatterns: ['.changeset/*.md', 'pnpm-lock.yaml'],
	},
	test: {
		// Vitest v4 compatibility: preserve mock call history.
		// Remove after tests no longer rely on calls from setup or earlier tests.
		// https://rfc-vitest-v5-upgrade-viteplus-dev.voidzero-docs.workers.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
		// https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
		clearMocks: false,
		projects: ['packages/*'],
	},
});
