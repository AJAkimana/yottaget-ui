import { store } from '../store';
import { GET_HOUSES, SEARCH_HOUSES, GET_DASHBOARD_COUNT } from './actionTypes';
import { http } from '../utils/http';

export const getHouses = (page = 1, pageSize = 20, area, forAdmin) => {
  let actionUrl = `/houses?page=${page}&pageSize=${pageSize}`;
  let actionType = GET_HOUSES;
  if (area) {
    actionUrl += `&area=${area}`;
  }
  if (forAdmin) {
    actionUrl += '&forAdmin=true';
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
export const getDashboardCount = () => {
  store.dispatch({
    type: GET_DASHBOARD_COUNT,
    payload: http.get('/users/dashboard'),
  });
};
