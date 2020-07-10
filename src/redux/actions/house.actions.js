import { store } from '../store';
import { GET_HOUSE_DETAILS, CREATE_HOUSE } from './actionTypes';
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
