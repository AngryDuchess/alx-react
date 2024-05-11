/**
 * test notification filters
 */
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";


test('test for the markAsAread action', () => {
  expect(markAsAread(1)).toEqual({type: MARK_AS_READ, index: 1})
})

test('test for the setNotificationFilter action', () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
        type: SET_TYPE_FILTER,
        filter: "DEFAULT"
      })
})
