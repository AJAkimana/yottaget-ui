import { userState } from '../initialStates';
import { fulfilled, pending, rejected } from '../utils/actions';
import { LOGIN_USER, SET_LOGGED_USER } from '../actions/actionTypes';

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case pending(LOGIN_USER):
      return {
        ...state,
        loggingIn: true,
      };
    case fulfilled(LOGIN_USER):
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        userInfo: action.payload.data.data,
      };
    case SET_LOGGED_USER:
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload,
      };
    case rejected(LOGIN_USER):
    default:
      return userState;
  }
};
