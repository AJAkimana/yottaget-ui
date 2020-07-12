import { pending, rejected, fulfilled } from '../utils/actions';
import { GET_USERS, ADD_NEW_USER, GET_DASHBOARD_COUNT } from '../actions';
import { baseState } from '../initialStates';

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
      return { ...state, loading: false };
  }
};
export const addUserReducer = (state = baseState('user', {}), action) => {
  switch (action.type) {
    case pending(ADD_NEW_USER):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(ADD_NEW_USER):
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload.data.data,
      };
    case rejected(ADD_NEW_USER):
    default:
      return { ...state, loading: false };
  }
};
export const userDashReducer = (state = baseState('counts', []), action) => {
  switch (action.type) {
    case pending(GET_DASHBOARD_COUNT):
      return {
        ...state,
        loading: true,
      };
    case fulfilled(GET_DASHBOARD_COUNT):
      return {
        ...state,
        loading: false,
        loaded: false,
        counts: action.payload.data.data,
      };
    case rejected(GET_DASHBOARD_COUNT):
    default:
      return {
        ...state,
        loading: false,
      };
  }
};
