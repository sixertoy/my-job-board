import { combineReducers } from 'redux';

import * as appstates from './appstates';
import * as card from './card';
import * as feeds from './feeds';
import * as fortunes from './fortunes';

function createRootReducer() {
  return combineReducers({
    ...appstates,
    ...card,
    ...feeds,
    ...fortunes,
  });
}
export default createRootReducer;
