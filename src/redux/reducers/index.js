import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { loginReducer, registerReducer, signOutReducer } from './authReducer';
import {
  sampleHousesReducer,
  housesReducer,
  searchReducer,
} from './housesReducer';
import { oneHouseReducer, addHouseReducer } from './oneHouseReducer';
import { usersReducer, addUserReducer } from './usersReducer';
import { locationsReducer } from './locationsReducer';

export default combineReducers({
  session: sessionReducer,
  login: loginReducer,
  register: registerReducer,
  sampleHouses: sampleHousesReducer,
  housesGet: housesReducer,
  oneHouse: oneHouseReducer,
  search: searchReducer,
  usersGet: usersReducer,
  locationsGet: locationsReducer,
  houseAdd: addHouseReducer,
  addUser: addUserReducer,
  userOut: signOutReducer,
});
