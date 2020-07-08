import { GET_LOCATIONS } from './actionTypes';
import { http } from '../utils/http';
import { store } from '../store';

export const getLocations = () => {
  store.dispatch({
    type: GET_LOCATIONS,
    payload: http.get('/locations'),
  });
};
