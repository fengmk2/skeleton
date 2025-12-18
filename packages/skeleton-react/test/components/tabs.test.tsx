import Tabs from './tabs.jsx';
import { act } from 'react';
import { describe, expect, it } from '@voidzero-dev/vite-plus/test';
import { render } from 'vitest-browser-react';
import { page } from '@voidzero-dev/vite-plus/test/browser';

describe('Tabs', () => {
	describe('Root', () => {
		it('renders', async () => {
			await act(() => render(<Tabs />));
			await expect.element(page.getByTestId('root')).toBeInTheDocument();
		});
	});

	describe('List', () => {
		it('renders', async () => {
			await act(() => render(<Tabs />));
			await expect.element(page.getByTestId('list')).toBeInTheDocument();
		});
	});

	describe('Trigger', () => {
		it('renders', async () => {
			await act(() => render(<Tabs />));
			await expect.element(page.getByTestId('trigger')).toBeInTheDocument();
		});
	});

	describe('Indicator', () => {
		it('renders', async () => {
			await act(() => render(<Tabs />));
			await expect.element(page.getByTestId('indicator')).toBeInTheDocument();
		});
	});

	describe('Content', () => {
		it('renders', async () => {
			await act(() => render(<Tabs />));
			await expect.element(page.getByTestId('content')).toBeInTheDocument();
		});
	});
});
