import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../../src/popup/Header';

test('renders header with correct title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Apate - Fighting Misinformation/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders header with logo', () => {
  render(<Header />);
  const logoElement = screen.getByAltText('Apate Logo');
  expect(logoElement).toBeInTheDocument();
});

test('renders header with close button', () => {
  render(<Header />);
  const closeButton = screen.getByRole('button', { name: /close window/i });
  expect(closeButton).toBeInTheDocument();
});

test('clicking close button closes window', async () => {
  render(<Header />);
  const closeButton = screen.getByRole('button', { name: /close window/i });
  userEvent.click(closeButton);
  expect(window.close).toHaveBeenCalled();
});

test('hovering over close button displays title', () => {
  render(<Header />);
  const closeButton = screen.getByRole('button', { name: /close window/i });
  userEvent.hover(closeButton);
  expect(closeButton).toHaveAttribute('title', 'Close window');
});