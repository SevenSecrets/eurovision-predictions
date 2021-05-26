import { screen, render, fireEvent } from '@testing-library/react';
import Ranking from '../components/ranking';

it('renders without error', () => {
    render(<Ranking />);
});

it('contains an entry form', () => {
    render(<Ranking />);
    // testing for existence of one of the fields
    expect(screen.getByLabelText(/Song Title/i)).toBeInTheDocument();
});

it('adds a new entry through the form', () => {
    render(<Ranking />);
    const songTitleField = screen.getByLabelText(/Song Title/i);
    const artistField = screen.getByLabelText(/Artist/i);
    const countryField = screen.getByLabelText(/Country/i);
    const submitButton = screen.getByTestId('form-submit')
    fireEvent.change(songTitleField, { target: { value: 'SHUM' }});
    fireEvent.change(artistField, { target: { value: 'Go_A' }});
    fireEvent.change(countryField, { target: { value: 'Ukraine' }});
    fireEvent.click(submitButton);
    expect(screen.getByTestId('entry')).toBeInTheDocument();
});