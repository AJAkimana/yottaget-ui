import {
  LOGIN_USER,
  REGISTER_USER,
  LOG_OUT_USER,
  UPDATE_USER,
} from './actionTypes';
import { store } from '../store';
import { http } from '../utils/http';

export const loginUser = (userInfo) => {
  store.dispatch({
    type: LOGIN_USER,
    payload: http.post('/users/login', userInfo),
  });
};
export const registerUser = (user) => {
  store.dispatch({
    type: REGISTER_USER,
    payload: http.post('/users/signup', user),
  });
};
export const logoutUser = () => {
  store.dispatch({
    type: LOG_OUT_USER,
    payload: http.get('/users/logout'),
  });
};
export const updateUser = (userInfo) => {
  store.dispatch({
    type: UPDATE_USER,
    payload: http.patch('/users', userInfo),
  });
};
