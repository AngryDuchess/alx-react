import * as action from './notificationActionTypes';

export const markAsAread = (index) => ({
  type: action.MARK_AS_READ,
  index
})

export const setNotificationFilter = (filter) => ({
  type: action.SET_TYPE_FILTER,
  filter
})
