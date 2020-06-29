import { store } from '../store';
import { GET_HOUSE_DETAILS } from './actionTypes';
import { http } from '../utils/http';

export const getHouseDetails = (houseId) => {
  store.dispatch({
    type: GET_HOUSE_DETAILS,
    payload: http.get(`/houses/${houseId}`),
  });
};
