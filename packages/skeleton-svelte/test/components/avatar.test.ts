import Avatar from './avatar.svelte';
import { describe, expect, it } from '@voidzero-dev/vite-plus/test';
import { render } from 'vitest-browser-svelte';
import { page } from '@voidzero-dev/vite-plus/test/browser';

describe('Avatar', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(Avatar);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Image', () => {
		it('renders', async () => {
			render(Avatar);
			await expect.element(page.getByTestId('image')).toBeInTheDocument();
		});
	});

	describe('Fallback', () => {
		it('renders', async () => {
			render(Avatar);
			await expect.element(page.getByTestId('fallback')).toBeInTheDocument();
		});
	});
});
