import { combineReducers } from 'redux';

import * as appstates from './appstates';
import * as card from './card';
import * as feeds from './feeds';
import * as fortunes from './fortunes';
import * as notes from './notes';
import * as projects from './projects';
import * as theme from './theme';
import * as todos from './todos';

function createRootReducer() {
  return combineReducers({
    ...appstates,
    ...todos,
    ...notes,
    ...projects,
    ...card,
    ...feeds,
    ...theme,
    ...fortunes,
  });
}
export default createRootReducer;
