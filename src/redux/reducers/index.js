import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { loginReducer, registerReducer } from './authReducer';
import { sampleHousesReducer, housesReducer } from './housesReducer';
import { oneHouseReducer } from './oneHouseReducer';

export default combineReducers({
  login: loginReducer,
  session: sessionReducer,
  register: registerReducer,
  sampleHouses: sampleHousesReducer,
  houses: housesReducer,
  oneHouse: oneHouseReducer,
});
