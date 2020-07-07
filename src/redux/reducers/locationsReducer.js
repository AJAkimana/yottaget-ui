import { pending, rejected, fulfilled } from '../utils/actions';
import { GET_LOCATIONS } from '../actions';

const { baseState } = require('../initialStates');

const initialState = baseState('locations', []);
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(GET_LOCATIONS):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(GET_LOCATIONS):
      return {
        ...state,
        loading: false,
        loaded: true,
        locations: action.payload.data.data,
      };
    case rejected(GET_LOCATIONS):
    default:
      return initialState;
  }
};
