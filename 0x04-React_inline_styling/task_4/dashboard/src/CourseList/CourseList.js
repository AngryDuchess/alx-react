import React from "react";
import CourseListRow from "./CourseListRow";
// import "./CourseList.css";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet,css } from "aphrodite";

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
const styles = StyleSheet.create({
	table: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '2em',
		width: '90%',
		height: 'fit-content',
		border: '1px solid #ddd',
		fontSize: '1.2rem',
		marginBottom: '15em',
	},
	th: {
		borderBottom: '1px solid #ddd',
		width: '80%',
	},
	td: {
		width: '80%',
	},
	tr: {
		':nth-child(2)': {
			textAlign: 'left',
		},
	},
}); 

export default function CourseList({ listCourses }) {
  return (
    <>
      <table id="CourseList" className={css(styles.table)}>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow
            isHeader={true}
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow
              isHeader={false}
              textFirstCell="No course available yet"
            />
          ) : (
            listCourses.map(course => (

                <CourseListRow
                key={course.id}
                  isHeader={false}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                />
             ))
          )}
          {/* <CourseListRow
            isHeader={false}
            textFirstCell="ES6"
            textSecondCell="60"
          />
          <CourseListRow
            isHeader={false}
            textFirstCell="Webpack"
            textSecondCell="20"
          />
          <CourseListRow
            isHeader={false}
            textFirstCell="React"
            textSecondCell="40"
          /> */}
        </tbody>
      </table>
    </>
  );
}
