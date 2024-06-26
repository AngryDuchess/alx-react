import React from 'react';
import PropTypes from "prop-types";

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const rowStyle = {
  backgroundColor: "#f5f5f5ab"
};

const headerStyle = {
  backgroundColor: "#deb5b545"
};
export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    return (
      <tr
      style={rowStyle}>
        {isHeader ? (
          textSecondCell === null ? (
            <th style={headerStyle} colSpan={2}>{textFirstCell}</th>
          ) : (
            <>
              <th style={headerStyle}>{textFirstCell}</th>
              <th style={headerStyle}>{textSecondCell}</th>
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
