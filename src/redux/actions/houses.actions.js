import { store } from '../store';
import { GET_HOUSES, GET_SAMPLE_HOUSES } from './actionTypes';
import { http } from '../utils/http';

export const getHouses = (type = '', pageNumber = 1) => {
  let actionUrl = `/houses?pageNumber=${pageNumber}`;
  let actionType = GET_HOUSES;
  if (type !== '') {
    actionUrl += `&type=${type}`;
    actionType = GET_SAMPLE_HOUSES;
  }
  store.dispatch({
    type: actionType,
    payload: http.get(actionUrl),
  });
};
