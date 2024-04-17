import Login from './Login';
import { shallow } from 'enzyme';

describe('<Login />', () => {
    it('renders the login form', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeDefined();
    });
    // it('renders a form tag', () => {
    //     const wrapper = shallow(<Login />);
    //     expect(wrapper.find('form')).toHaveLength(1);
    // });
    it('renders an input tag', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
    });
    // it('renders a button tag', () => {
    //     const wrapper = shallow(<Login />);
    //     expect(wrapper.find('button')).toHaveLength(1);
    // });
});