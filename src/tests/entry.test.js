import { screen, render } from '@testing-library/react';
import Entry from '../components/entry';

it('renders with props', () => {
    render(<Entry songTitle='SHUM' artist='Go_A' country='Ukraine' rank="1" />);
    expect(screen.getByText('Song: SHUM')).toBeInTheDocument();
    expect(screen.getByText('Artist: Go_A')).toBeInTheDocument();
    expect(screen.getByText('Ukraine')).toBeInTheDocument();
});