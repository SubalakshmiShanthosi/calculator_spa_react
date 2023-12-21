import { render, screen } from '@testing-library/react';
import App from './App';

test('check if calculator header is visible', () => {
  render(<App />);
  const calculatorElement = screen.getByText(/calculator/i);
  expect(calculatorElement).toBeInTheDocument();
});
