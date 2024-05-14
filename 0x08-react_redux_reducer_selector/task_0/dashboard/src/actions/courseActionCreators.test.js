import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
/**
 * Test for course actions
 */

test('test for the selectCourse action', () => {
    const expectedData = { type: SELECT_COURSE, index: 1 }
    expect(selectCourse(1)).toEqual(expectedData);
})

test('test for the unselectCourse action', () => {
    const expectedData = { type: UNSELECT_COURSE, index: 1 }
    expect(unSelectCourse(1)).toEqual(expectedData);
})