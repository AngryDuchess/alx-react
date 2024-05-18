/**
 * Test for ui reducer function
 */
import * as uiactions from "../actions/uiActionTypes";
import { SELECT_COURSE } from "../actions/courseActionTypes";
import uiReducer from "./uiReducer";

test("test default state returned when no action is passed", () => {
  const expectedState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  expect(uiReducer(undefined, {})).toEqual(expectedState);
});

test("test state returned when SELECT_COURSE is passed", () => {
  const expectedState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  expect(uiReducer(undefined, SELECT_COURSE)).toEqual(expectedState);
});

test("test when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property ", () => {
  const expectedState = {
    isNotificationDrawerVisible: true,
    isUserLoggedIn: false,
    user: {},
  };
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  expect(
    uiReducer(initialState, { type: uiactions.DISPLAY_NOTIFICATION_DRAWER })
  ).toEqual(expectedState);
});
