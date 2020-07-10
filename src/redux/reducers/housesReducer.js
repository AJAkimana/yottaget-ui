import { pending, fulfilled, rejected } from '../utils/actions';
import { GET_SAMPLE_HOUSES, GET_HOUSES, SEARCH_HOUSES } from '../actions';
import { baseState, searchState } from '../initialStates';

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
      return { ...state, loading: false };
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
      return { ...state, loading: false };
  }
};
export const searchReducer = (state = searchState, action) => {
  switch (action.type) {
    case pending(SEARCH_HOUSES):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(SEARCH_HOUSES):
      return {
        ...state,
        loading: false,
        loaded: true,
        results: action.payload.data.data,
      };
    case rejected(SEARCH_HOUSES):
    default:
      return { ...state, loading: false };
  }
};
