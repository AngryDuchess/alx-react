/**
 * Test ui actions
 */
import { login,logout,displayNotificationDrawer,hideNotificationDrawer } from "./uiActionCreators";
import * as actions from './uiActionTypes';

test('test login function', () => {
    const expectedData={type: actions.LOGIN, user: {email: "hamida@gmail.com", password: "123"}};
    expect(login('hamida@gmail.com','123')).toEqual(expectedData);
});

test('test logout function', () => {
    const expectedData = {type: actions.LOGOUT};
    expect(logout()).toEqual(expectedData);
})

test('test display drawer', () => {
    const expectedData = {type: actions.DISPLAY_NOTIFICATION_DRAWER};
    expect(displayNotificationDrawer()).toEqual(expectedData);
})

test('test hiding drawer', () => {
    const expectedData = {type: actions.HIDE_NOTIFICATION_DRAWER};
    expect(hideNotificationDrawer()).toEqual(expectedData);
})