import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
// import './BodySectionWithMarginBottom.css';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    },
});
export default class BodySectionWithMarginBottom extends React.Component {
    render() {
        // const {title,children} = this.props;
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        )
    }
}
