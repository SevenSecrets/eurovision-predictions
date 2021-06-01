import { render, screen } from './test-utils';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/Build Your Own Eurovision Rankings Predictions/i);
  expect(titleElement).toBeInTheDocument();
});
