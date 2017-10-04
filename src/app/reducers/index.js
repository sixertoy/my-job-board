import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  feeds,
  isloaded,
  feedsitems } from './appstates';

// saved in persitent store
export const whitelist = [];

// do not saved in persitent store
export const blacklist = [];

export const reducers = combineReducers({
  // services
  feeds,
  isloaded,
  feedsitems,
  // !!! always last
  routing: routerReducer
});

export default reducers;
