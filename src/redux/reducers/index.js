import { combineReducers } from 'redux';

import * as appstates from './appstates';
import * as card from './card';
import * as feeds from './feeds';

function createRootReducer() {
  return combineReducers({
    ...appstates,
    ...card,
    ...feeds,
  });
}
export default createRootReducer;
