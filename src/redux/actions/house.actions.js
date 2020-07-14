import { store } from '../store';
import {
  GET_HOUSE_DETAILS,
  CREATE_HOUSE,
  GET_UTILITIES,
  ADD_HOUSE_IMAGES,
} from './actionTypes';
import { http } from '../utils/http';

export const getHouseDetails = (houseId) => {
  store.dispatch({
    type: GET_HOUSE_DETAILS,
    payload: http.get(`/houses/${houseId}`),
  });
};
export const createHouse = (houseInfo) => {
  store.dispatch({
    type: CREATE_HOUSE,
    payload: http.post('/houses', houseInfo),
  });
};
export const getUtilities = (location) => {
  store.dispatch({
    type: GET_UTILITIES,
    payload: http.get(`/utilities?locationId=${location}`),
  });
};
export const addHouseImages = (houseId, images) => {
  const route = `/houses/${houseId}/add-images`;
  store.dispatch({
    type: ADD_HOUSE_IMAGES,
    payload: http.patch(route, images),
  });
};
