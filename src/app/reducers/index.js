import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  feeds,
  isready,
  isloaded,
  feedsitems,
  lastupdate } from './appstates';

// saved in persitent store
export const whitelist = [
  'lastupdate',
  'feedsitems'
];

// do not saved in persitent store
export const blacklist = [];

export const reducers = combineReducers({
  // services
  feeds,
  isready,
  isloaded,
  lastupdate,
  feedsitems,
  // !!! always last
  routing: routerReducer
});

export default reducers;
