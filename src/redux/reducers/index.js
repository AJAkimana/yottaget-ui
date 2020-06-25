import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { userReducer } from './authReducer';

export default combineReducers({ auth: userReducer, session: sessionReducer });
