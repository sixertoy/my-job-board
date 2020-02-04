import { createSelector } from 'reselect';

// application
import { UPDATE_INTERVAL_MS } from './../../constants';

const getlastupdate = state => state.lastupdate;

export const getNextUpdate = createSelector(
  [getlastupdate],
  lastupdate =>
    ((lastupdate && (lastupdate + UPDATE_INTERVAL_MS)) || 0)
);

export default getNextUpdate;
