import * as actions from "./courseActionTypes";

export const selectCourse = (index) => ({
  type: actions.SELECT_COURSE,
  index
});

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export const unSelectCourse =(index) => ({
    type: actions.UNSELECT_COURSE,
    index
})

export const boundUnselectCourse = (index) => dispatch(selectCourse(index));
