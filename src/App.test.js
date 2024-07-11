import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<index />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
