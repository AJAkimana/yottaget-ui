import { baseState } from '../initialStates';
import { pending, rejected, fulfilled } from '../utils/actions';
import { GET_HOUSE_DETAILS, CREATE_HOUSE } from '../actions';

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
      return { ...state, loading: false };
  }
};
export const addHouseReducer = (state = baseState('house', {}), action) => {
  switch (action.type) {
    case pending(CREATE_HOUSE):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(CREATE_HOUSE):
      return {
        ...state,
        loading: false,
        loaded: true,
        house: action.payload.data.data,
      };
    case rejected(CREATE_HOUSE):
    default:
      return { ...state, loading: false };
  }
};
