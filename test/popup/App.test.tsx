import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/popup/App';

test('renders Apate title element', () => {
  render(<App />);
  const titleElement = screen.getByText(/Apate Test/i);
  expect(titleElement).toBeInTheDocument();
});
