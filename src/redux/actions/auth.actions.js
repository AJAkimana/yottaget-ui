import { LOGIN_USER, REGISTER_USER } from './actionTypes';
import { store } from '../store';
import { http } from '../utils/http';

export const loginUser = (userInfo) => {
  store.dispatch({
    type: LOGIN_USER,
    payload: http.post('/users/login', userInfo),
  });
};
export const registerUser = (user) => {
  delete user.confirmPassword;
  store.dispatch({
    type: REGISTER_USER,
    payload: http.post('/users/signup', user),
  });
};
