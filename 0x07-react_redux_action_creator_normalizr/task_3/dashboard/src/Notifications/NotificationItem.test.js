import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<NotificationItem />', () => {
    it ('renders the NotificationItem component', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toBeDefined();
    });
    it ('renders the NotificationItem component with type and value props', () => {
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        expect(wrapper.find('li').text()).toBe('test');
    });
    it ('renders the Notification component with html prop', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').html()).toBe('<li data-urgent=""><u>test</u></li>');
    });

    it ('renders the NotificationItem component with html prop', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').html()).toBe('<li data-urgent=""><u>test</u></li>');
    });
});
