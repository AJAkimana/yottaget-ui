import { baseState } from '../initialStates';
import { pending, fulfilled, rejected } from '../utils/actions';
import { GET_UTILITIES } from '../actions';

export const utilityGetReducer = (
  state = baseState('utilities', []),
  action
) => {
  switch (action.type) {
    case pending(GET_UTILITIES):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(GET_UTILITIES):
      return {
        ...state,
        loading: false,
        loaded: true,
        utilities: action.payload.data.data,
      };
    case rejected(GET_UTILITIES):
    default:
      return {
        ...state,
        loading: false,
      };
  }
};
