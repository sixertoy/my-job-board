import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  openedcard,
  draggingcard } from './card';
import {
  search,
  isready,
  isloading,
  lastupdate } from './appstates';
import {
  feeds,
  joboffers } from './feeds';

// saved in persitent store
export const whitelist = [
  'lastupdate',
  'joboffers'
];

// do not saved in persitent store
export const blacklist = [];

export const reducers = combineReducers({
  // car
  openedcard,
  draggingcard,
  // feeds
  feeds,
  joboffers,
  // services
  search,
  isready,
  isloading,
  lastupdate,
  // !!! always last
  routing: routerReducer
});

export default reducers;
