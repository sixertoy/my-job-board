import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// saved in persitent store
export const whitelist = [];

// do not saved in persitent store
export const blacklist = [];

export const reducers = combineReducers({
  // !!! always last
  routing: routerReducer
});

export default reducers;
