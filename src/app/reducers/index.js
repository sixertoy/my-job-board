import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { draggingcarid } from './card';
import {
  isready,
  isloading,
  nextupdate } from './appstates';
import {
  feeds,
  doneitems,
  todositems,
  feedsitems,
  inprogressitems } from './feeds';

// saved in persitent store
export const whitelist = [
  'doneitems',
  'todositems',
  'nextupdate',
  'feedsitems',
  'inprogressitems'
];

// do not saved in persitent store
export const blacklist = [];

export const reducers = combineReducers({
  // car
  draggingcarid,
  // feeds
  feeds,
  doneitems,
  feedsitems,
  todositems,
  inprogressitems,
  // services
  isready,
  isloading,
  nextupdate,
  // !!! always last
  routing: routerReducer
});

export default reducers;
