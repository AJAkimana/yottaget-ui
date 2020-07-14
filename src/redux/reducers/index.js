import { combineReducers } from 'redux';
// import { sessionReducer } from 'redux-react-session';
import {
  loginReducer,
  registerReducer,
  signOutReducer,
  userUpdateReducer,
} from './authReducer';
import {
  sampleHousesReducer,
  housesReducer,
  searchReducer,
} from './housesReducer';
import {
  oneHouseReducer,
  addHouseReducer,
  houseImageReducer,
} from './oneHouseReducer';
import {
  usersReducer,
  addUserReducer,
  userDashReducer,
  forgetPasswordReducer,
} from './usersReducer';
import { locationsReducer } from './locationsReducer';
import { utilityGetReducer } from './utilitityReducer';

export default combineReducers({
  // session: sessionReducer,
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
  userUpdate: userUpdateReducer,
  userDash: userDashReducer,
  forgetPass: forgetPasswordReducer,
  utilityGet: utilityGetReducer,
  houseImagesAdd: houseImageReducer,
});
