import { LOGIN_USER, SET_LOGGED_USER } from './actionTypes';
import { store } from '../store';
import { http } from '../utils/http';

export const loginUser = (userInfo) => {
  store.dispatch({
    type: LOGIN_USER,
    payload: http.post('/users/login', userInfo),
  });
};
export const setLoggedUser = (user) => {
  store.dispatch({
    type: SET_LOGGED_USER,
    payload: user,
  });
};
