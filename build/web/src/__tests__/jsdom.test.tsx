import {render, screen} from '@testing-library/react';

import App from '../App';

describe('Setup', ()=> {
    it('renders', ()=> {
        render(<App/>);
        expect(screen.getByText(/what to do/i)).toBeInTheDocument();
    });
});