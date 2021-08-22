import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Routine Builder', () => {
  render(<App />);
  const element = screen.getByText(/Routine Builder/i);
  expect(element).toBeInTheDocument();
});
