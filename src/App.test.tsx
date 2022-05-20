import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders personify title', () => {
  render(<App />);
  const linkElement = screen.getByText(/personify/i);
  expect(linkElement).toBeInTheDocument();
});
