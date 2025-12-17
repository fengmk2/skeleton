import RatingGroup from './rating-group.svelte';
import { describe, expect, it } from '@voidzero-dev/vite-plus/test';
import { render } from 'vitest-browser-svelte';
import { page } from '@voidzero-dev/vite-plus/test/browser';

describe('RatingGroup', () => {
	describe('Root', () => {
		it('renders', async () => {
			render(RatingGroup);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Label', () => {
		it('renders', async () => {
			render(RatingGroup);
			await expect.element(page.getByTestId('label')).toBeInTheDocument();
		});
	});

	describe('Control', () => {
		it('renders', async () => {
			render(RatingGroup);
			await expect.element(page.getByTestId('control')).toBeInTheDocument();
		});
	});

	describe('Items', () => {
		it('renders', async () => {
			render(RatingGroup);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});

	describe('HiddenInput', () => {
		it('renders', async () => {
			render(RatingGroup);
			await expect.element(page.getByTestId('hidden-input')).toBeInTheDocument();
		});
	});
});
