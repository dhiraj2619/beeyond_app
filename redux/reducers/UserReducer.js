import {
  CLEAR_ERRORS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from '../constants/UserConstants';

const initialState = {
  user: {},
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
