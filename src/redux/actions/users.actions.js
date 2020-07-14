import { GET_USERS, ADD_NEW_USER, FORGET_PASSWORD } from './actionTypes';
import { http } from '../utils/http';
import { store } from '../store';

export const getUsers = (type = '') => {
  store.dispatch({
    type: GET_USERS,
    payload: http.get(`/users?type=${type}`),
  });
};
export const AddNewUser = (user) => {
  store.dispatch({
    type: ADD_NEW_USER,
    payload: http.post('/users', user),
  });
};
export const foregetPassword = (userInfo) => {
  store.dispatch({
    type: FORGET_PASSWORD,
    payload: http.post('/users/forget-password', userInfo),
  });
};
