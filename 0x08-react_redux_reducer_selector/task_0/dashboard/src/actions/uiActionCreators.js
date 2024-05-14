import * as actions from "./uiActionTypes";
// import '../../dist/login-success.json'

export const login = (email, password) => ({
  type: actions.LOGIN,
  user: {
    email,
    password,
  },
});

export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => ({
  type: actions.LOGOUT,
});

export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => ({
  type: actions.DISPLAY_NOTIFICATION_DRAWER,
});

export const bounddisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => ({
  type: actions.HIDE_NOTIFICATION_DRAWER,
});
export const boundhideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export const loginSuccess = () => ({
  type: actions.LOGIN_SUCCESS,
});

export const boundloginSuccess = () => dispatch(loginSuccess());

export const loginFailure = () => ({
  type: actions.LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const res = await fetch("http://localhost:5500/login-success.json");
      const json = await res.json();
      if (res.ok) {
        return dispatch(loginSuccess(json));
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      return dispatch(loginFailure());
    }
  };
};
