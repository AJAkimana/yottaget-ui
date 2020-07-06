import { store } from '../store';
import { GET_HOUSES, SEARCH_HOUSES } from './actionTypes';
import { http } from '../utils/http';

export const getHouses = (page = 1, pageSize = 20, area = '') => {
  let actionUrl = `/houses?page=${page}&pageSize=${pageSize}`;
  let actionType = GET_HOUSES;
  if (area !== '') {
    actionUrl += `&area=${area}`;
  }
  store.dispatch({
    type: actionType,
    payload: http.get(actionUrl),
  });
};
export const searchHouses = (searchKey) => {
  store.dispatch({
    type: SEARCH_HOUSES,
    payload: http.get(`/search?searchKey=${searchKey}`),
  });
};
