import { pending, rejected, fulfilled } from '../utils/actions';
import { GET_USERS } from '../actions';

const { baseState } = require('../initialStates');

const initialState = baseState('users', []);
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case pending(GET_USERS):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(GET_USERS):
      return {
        ...state,
        loading: false,
        loaded: true,
        users: action.payload.data.data,
      };
    case rejected(GET_USERS):
    default:
      return initialState;
  }
};
