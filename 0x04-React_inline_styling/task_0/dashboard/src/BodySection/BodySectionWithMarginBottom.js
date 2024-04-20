import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

export default class BodySectionWithMarginBottom extends React.Component {
    render() {
        // const {title,children} = this.props;
        return (
            <div className='bodySectionWithMargin'>
                <BodySection {...this.props} />
            </div>
        )
    }
}