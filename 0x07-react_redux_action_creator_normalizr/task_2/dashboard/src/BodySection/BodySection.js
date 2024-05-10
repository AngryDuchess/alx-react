import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    },
});
export default class BodySection extends React.Component {
    render() {
        const {title,children} = this.props;
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <h2>{title}</h2>
                {children}
            </div>
        )
    }
}