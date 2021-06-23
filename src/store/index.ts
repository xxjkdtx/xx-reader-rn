import { combineReducers, createStore } from 'redux';
import snack from './reducers/snack';

const reducer = combineReducers({ snack: snack });
const store = createStore(reducer);

export default store;
