import ReactDOM from 'react-dom';
import Entry from '../components/entry';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Entry />, div);
});