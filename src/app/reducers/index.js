import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { draggingcarid } from './card';
import {
  isready,
  isloading,
  nextupdate } from './appstates';
import {
  feeds,
  todositems,
  feedsitems } from './feeds';

// saved in persitent store
export const whitelist = [
  'todositems',
  'nextupdate',
  'feedsitems'
];

// do not saved in persitent store
export const blacklist = [];

export const reducers = combineReducers({
  // car
  draggingcarid,
  // feeds
  feeds,
  feedsitems,
  todositems,
  // services
  isready,
  isloading,
  nextupdate,
  // !!! always last
  routing: routerReducer
});

export default reducers;
