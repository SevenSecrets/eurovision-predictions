import { screen, render, fireEvent } from '@testing-library/react';
import EntryForm from '../components/entryForm';

it('renders without errors', () => {
    render(<EntryForm />);
});

it('accepts entry into the form and submits', () => {
    render(<EntryForm />);
    const songTitleField = screen.getByLabelText(/Song Title/i);
    const artistField = screen.getByLabelText(/Artist/i);
    const countryField = screen.getByLabelText(/Country/i);
    const submitButton = screen.getByTestId('form-submit')
    fireEvent.change(songTitleField, { target: { value: 'SHUM' }});
    fireEvent.change(artistField, { target: { value: 'Go_A' }});
    fireEvent.change(countryField, { target: { value: 'Ukraine' }});
    fireEvent.click(submitButton);
});