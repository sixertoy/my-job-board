import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  feeds,
  isready,
  isloading,
  feedsitems,
  nextupdate } from './appstates';

// saved in persitent store
export const whitelist = [
  'nextupdate',
  'feedsitems'
];

// do not saved in persitent store
export const blacklist = [];

export const reducers = combineReducers({
  // services
  feeds,
  isready,
  isloading,
  nextupdate,
  feedsitems,
  // !!! always last
  routing: routerReducer
});

export default reducers;
