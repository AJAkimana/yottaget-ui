import { store } from '../store';
import { GET_LOCATIONS } from './actionTypes';
import { http } from '../utils/http';

export const getLocations = () => {
  store.dispatch({
    type: GET_LOCATIONS,
    payload: http.get('/locations'),
  });
};
