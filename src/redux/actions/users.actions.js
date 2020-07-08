import { GET_USERS } from './actionTypes';
import { http } from '../utils/http';
import { store } from '../store';

export const getUsers = (type = '') => {
  store.dispatch({
    type: GET_USERS,
    payload: http.get(`/users?type=${type}`),
  });
};
