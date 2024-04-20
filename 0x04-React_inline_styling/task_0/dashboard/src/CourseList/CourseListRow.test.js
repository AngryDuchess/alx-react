import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';


describe('<CourseListRow />', () => {
    it('renders one cell with colspan=2 when textSecondCell does not exist'), () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Test' />);
        const th = wrapper.find('th');
        expect(th).toHaveLength(1);
        expect(th.prop('colSpan')).toEqual(2);
    }

    it('renders two cells when textSecondCell exists'), () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Test' textSecondCell='Test' />);
        const th = wrapper.find('th');
        expect(th).toHaveLength(2);
    }
    it('renders two cells when isHeader is false'), () => {
        const wrapper = shallow(<CourseListRow isHeader={false} />);
        const td = wrapper.find('td');
        expect(td).toHaveLength(2);
        expect(td.first().parent().is('tr')).toEqual(true);
    }
});

describe('<CourseList />', () => {
    it('renders CourseList without crashing'), () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toBeDefined();
    }
    it('render 5 different rows'), () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    }
    it('should render one cell with colspan = 2 when textSecondCell null', () => {
		const wrapper = shallow(
			<CourseListRow
				isHeader={true}
				textFirstCell='test'
				textSecondCell={null}
			/>
		);

		expect(wrapper.find('tr').children()).toHaveLength(1);
		expect(wrapper.find('tr').childAt(0).html()).toEqual(
			'<th style="background-color:#deb5b545" colSpan="2">test</th>'
		);
	});
});