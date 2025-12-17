import ToggleGroup from './toggle-group.jsx';
import { describe, expect, it } from '@voidzero-dev/vite-plus/test';
import { render } from 'vitest-browser-react';
import { page } from '@voidzero-dev/vite-plus/test/browser';

describe('ToggleGroup', () => {
	describe('Root', () => {
		it('renders', async () => {
			await render(<ToggleGroup />);
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('Item', () => {
		it('renders', async () => {
			await render(<ToggleGroup />);
			await expect.element(page.getByTestId('item')).toBeInTheDocument();
		});
	});
});
