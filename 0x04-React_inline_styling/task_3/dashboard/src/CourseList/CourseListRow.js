import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  'row-style': {
    backgroundColor: "#f5f5f5ab",
  },
  'header-style': {
    backgroundColor: "#deb5b545",
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};


export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
      <tr
      className={isHeader ? css(styles['header-style']) : styles['row-style']}>
        {isHeader ? (
          textSecondCell === null ? (
            <th className={css(styles['header-style'])} colSpan={2}>{textFirstCell}</th>
          ) : (
            <>
              <th className={css(styles['header-style'])}>{textFirstCell}</th>
              <th className={css(styles['header-style'])}>{textSecondCell}</th>
            </>
          )
        ) : (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        )}
      </tr>
    );
  }
