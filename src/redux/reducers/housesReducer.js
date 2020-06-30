import { pending, fulfilled, rejected } from '../utils/actions';
import { GET_SAMPLE_HOUSES, GET_HOUSES } from '../actions';
import { baseState } from '../initialStates';

const initialState = baseState('houses', []);
export const sampleHousesReducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(GET_SAMPLE_HOUSES):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(GET_SAMPLE_HOUSES):
      return {
        ...state,
        loading: false,
        loaded: true,
        houses: action.payload.data.data,
      };
    case rejected(GET_SAMPLE_HOUSES):
    default:
      return initialState;
  }
};
export const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(GET_HOUSES):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(GET_HOUSES):
      return {
        ...state,
        loading: false,
        loaded: true,
        houses: action.payload.data.data,
      };
    case rejected(GET_HOUSES):
    default:
      return initialState;
  }
};
