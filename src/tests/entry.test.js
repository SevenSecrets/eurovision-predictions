import { screen, render } from '@testing-library/react';
import Entry from '../components/entry';

it('renders with props', () => {
    render(<Entry songTitle='SHUM' artist='Go_A' country='Ukraine' rank="1" />);
    expect(screen.getByText('SHUM')).toBeInTheDocument();
});