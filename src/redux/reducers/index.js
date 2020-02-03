import { combineReducers } from 'redux';

import * as appstates from './appstates';
import * as card from './card';
import * as feeds from './feeds';

// do not saved in persitent store
export const blacklist = [];
// saved into persitent store
export const whitelist = ['lastupdate', 'joboffers'];

export const createRootReducer = () =>
  combineReducers({
    ...appstates,
    ...card,
    ...feeds,
  });
