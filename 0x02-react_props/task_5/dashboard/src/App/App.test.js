import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
    it('renders the react app', () =>{
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });

    it('contains notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Notifications').length).toEqual(1);
    });
    it('contains header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header').length).toEqual(1);
    });
    it('contains footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').length).toEqual(1);
    });
    it('contains course list component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login).exists()).toEqual(false);
        expect(wrapper.find(CourseList).exists()).toEqual(true);
    });
    it('contains login component', () => {
        const wrapper = shallow(<App isLoggedIn={false} />);
        expect(wrapper.find(Login).exists()).toEqual(true);
        expect(wrapper.find(CourseList).exists()).toEqual(false);
    });
});