import { ADD_NOTIFICATIONS, REMOVE_NOTIFICATIONS } from "../constants/NotificationConstant";


export const AddNotification = (message, type = 'success') => {
  return dispatch => {
    const notification = {
      id: Date.now(),
      message,
      type,
    };

    dispatch({
      type: ADD_NOTIFICATIONS,
      payload: notification,
    });

    setTimeout(() => {
      dispatch(RemoveNotification(notification.id));
    }, 3000);
  };
};

export const RemoveNotification = notificationId => {
  return dispatch => {
    dispatch({
      type: REMOVE_NOTIFICATIONS,
      payload: notificationId,
    });
  };
};
