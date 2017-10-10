import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  selectedcard,
  draggingcardid } from './card';
import {
  isready,
  isloading,
  lastupdate,
  nextupdate } from './appstates';
import {
  feeds,
  feedsitems } from './feeds';

// saved in persitent store
export const whitelist = [
  'nextupdate',
  'feedsitems'
];

// do not saved in persitent store
export const blacklist = [];

export const reducers = combineReducers({
  // car
  selectedcard,
  draggingcardid,
  // feeds
  feeds,
  feedsitems,
  // services
  isready,
  isloading,
  nextupdate,
  lastupdate,
  // !!! always last
  routing: routerReducer
});

export default reducers;
