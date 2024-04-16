import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe('<Notifications />', () => {
    it('renders the notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toBeDefined();
    });
    it('verifies notifications renders only three elements', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });
    it('verifies that Notifications renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
    });
});
