import { loginState, registerState, baseState } from '../initialStates';
import { fulfilled, pending, rejected } from '../utils/actions';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOG_OUT_USER,
} from '../actions/actionTypes';

export const loginReducer = (state = loginState, action) => {
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
    case rejected(LOGIN_USER):
    default:
      return loginState;
  }
};
export const registerReducer = (state = registerState, action) => {
  switch (action.type) {
    case pending(REGISTER_USER):
      return {
        ...state,
        registering: true,
      };
    case fulfilled(REGISTER_USER):
      return {
        ...state,
        registering: false,
        registered: true,
        userInfo: action.payload.data.data,
      };
    case rejected(REGISTER_USER):
    default:
      return registerState;
  }
};
export const signOutReducer = (state = baseState('message', ''), action) => {
  switch (action.type) {
    case pending(LOG_OUT_USER):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(LOG_OUT_USER):
      return {
        ...state,
        loading: false,
        loaded: true,
        message: action.payload.data.message,
      };
    case rejected(LOG_OUT_USER):
    default:
      return {
        ...state,
        loading: false,
      };
  }
};
