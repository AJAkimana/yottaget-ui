import { store } from '../store';
import { GET_USERS } from './actionTypes';
import { http } from '../utils/http';

export const getUsers = (type = '') => {
  store.dispatch({
    type: GET_USERS,
    payload: http.get(`/users?type=${type}`),
  });
};
