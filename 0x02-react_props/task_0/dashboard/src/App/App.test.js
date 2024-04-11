import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
    it('renders the react app', () =>{
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });
    // it('renders a div with the class App-header', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.App-header').length).toEqual(1);
    // });
    // it('renders a div with the class App-body', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.App-body').length).toEqual(1);
    // });
    // it('renders a div with the class App-footer', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.find('.App-footer').length).toEqual(1);
    // });
});