import { baseState } from '../initialStates';
import { pending, rejected, fulfilled } from '../utils/actions';
import { GET_HOUSE_DETAILS } from '../actions';

const initialState = baseState('house', {
  images: [],
  utilities: [],
  location: {},
});
export const oneHouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(GET_HOUSE_DETAILS):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(GET_HOUSE_DETAILS):
      return {
        ...state,
        loading: false,
        loaded: true,
        house: action.payload.data.data,
      };
    case rejected(GET_HOUSE_DETAILS):
    default:
      return initialState;
  }
};
