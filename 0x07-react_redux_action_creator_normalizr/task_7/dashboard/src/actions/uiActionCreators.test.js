/**
 * Test ui actions
 */
import {
  loginRequest,
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";
import * as actions from "./uiActionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test("test login function", () => {
  const expectedData = {
    type: actions.LOGIN,
    user: { email: "hamida@gmail.com", password: "123" },
  };
  expect(login("hamida@gmail.com", "123")).toEqual(expectedData);
});

test("test logout function", () => {
  const expectedData = { type: actions.LOGOUT };
  expect(logout()).toEqual(expectedData);
});

test("test display drawer", () => {
  const expectedData = { type: actions.DISPLAY_NOTIFICATION_DRAWER };
  expect(displayNotificationDrawer()).toEqual(expectedData);
});

test("test hiding drawer", () => {
  const expectedData = { type: actions.HIDE_NOTIFICATION_DRAWER };
  expect(hideNotificationDrawer()).toEqual(expectedData);
});

// describe("loginRequest action", () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it("dispatches LOGIN and LOGIN_SUCCESS when the API returns the right response", () => {
//     fetchMock.getOnce("http://localhost:5500/login-success.json", {
//       body: { user: "user" },
//       headers: { "content-type": "application/json" },
//     });

//     const expectedActions = [
//       {
//         type: actions.LOGIN,
//         user: { email: "test@test.com", password: "password" },
//       },
//       { type: actions.LOGIN_SUCCESS },
//     ];
//     const store = mockStore({ auth: {} });

//     return store
//       .dispatch(loginRequest("test@test.com", "password"))
//       .then(() => {
//         expect(store.getActions()).toEqual(expectedActions);
//       });
//   });

//   it("dispatches LOGIN and LOGIN_FAILURE when the API query fails", () => {
//     fetchMock.getOnce("http://localhost:5500/login-success.json", 404);

//     const expectedActions = [
//       {
//         type: actions.LOGIN,
//         user: { email: "test@test.com", password: "password" },
//       },
//       { type: actions.LOGIN_FAILURE },
//     ];
//     const store = mockStore({ auth: {} });

//     return store
//       .dispatch(loginRequest("test@test.com", "password"))
//       .then(() => {
//         expect(store.getActions()).toEqual(expectedActions);
//       });
//   });
// });
