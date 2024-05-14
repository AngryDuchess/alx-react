import React, { useState } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  'row-style': {
    backgroundColor: "#f5f5f5ab",
  },
  'header-style': {
    backgroundColor: "#deb5b545",
  },
  rowCheckedStyle: {
    backgroundColor: '#e6e4e4',
  }
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
  const [rowChecked, isRowChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    isRowChecked(event.target.checked);
  };
    return (
      <tr
      className={css(
        isHeader ? styles['header-style'] : rowChecked ? styles.rowCheckedStyle : styles['row-style']
      )}
      >
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
            <td>
              <input type='checkbox' checked={rowChecked} onChange={handleCheckboxChange}/>
              {textFirstCell}
            </td>
            <td>{textSecondCell}</td>
          </>
        )}
      </tr>
    );
  }
