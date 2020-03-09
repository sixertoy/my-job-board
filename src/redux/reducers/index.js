import { combineReducers } from 'redux';

import * as appstates from './appstates';
import * as card from './card';
import * as feeds from './feeds';
import * as fortunes from './fortunes';
import * as projects from './projects';
import * as theme from './theme';

function createRootReducer() {
  return combineReducers({
    ...appstates,
    ...projects,
    ...card,
    ...feeds,
    ...theme,
    ...fortunes,
  });
}
export default createRootReducer;
