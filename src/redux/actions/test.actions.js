import { ACTION_TEST } from './actionTypes';
import { fulfilled } from '../../utils/actions';
import { store } from '../store';

export const testReducerAction = () => {
  store.dispatch({
    type: fulfilled(ACTION_TEST),
    payload: 'It must work',
  });
};
