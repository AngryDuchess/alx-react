import React from 'react';
import Footer from './Footer';
import { shallow} from 'enzyme';
import { getFullYear,getFooterCopy } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Footer />', () => {
    it('renders the footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toBeDefined();
    });
    it('renders the Copyright text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toEqual(
            `Copyright ${getFullYear()} - ${getFooterCopy(true)}`
        )
    })
})