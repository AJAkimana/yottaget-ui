import { pending, rejected, fulfilled } from '../utils/actions';
import { GET_LOCATIONS } from '../actions';
import { baseState } from '../initialStates';

const initialState = baseState('locations', []);
export const locationsReducer = (state = initialState, action) => {
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
      return { ...state, loading: false };
  }
};
