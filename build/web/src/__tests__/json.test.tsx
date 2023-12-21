import * as ReactTestRenderer from 'react-test-renderer';
import App from '../App'

describe('Setup', ()=> {
    it('renders', ()=> {
        const instance = ReactTestRenderer.create(<App/>);
        const root = instance.root;
        expect(root).toBeDefined();
    });
});