import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { loginReducer, registerReducer } from './authReducer';
import {
  sampleHousesReducer,
  housesReducer,
  searchReducer,
} from './housesReducer';
import { oneHouseReducer } from './oneHouseReducer';

export default combineReducers({
  session: sessionReducer,
  login: loginReducer,
  register: registerReducer,
  sampleHouses: sampleHousesReducer,
  housesGet: housesReducer,
  oneHouse: oneHouseReducer,
  search: searchReducer,
});
