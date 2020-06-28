import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { loginReducer, registerReducer } from './authReducer';

export default combineReducers({
  login: loginReducer,
  session: sessionReducer,
  register: registerReducer,
});
