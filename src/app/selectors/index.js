import { createSelector } from 'reselect';

// application
import { shorten } from './../utils/shorten';
import { humandate } from './../utils/humandate';
import { UPDATE_INTERVAL_MS } from './../../constants';

const getjoboffers = state => state.joboffers;
const getlastupdate = state => state.lastupdate;

export const getJobOffers = createSelector(
  [getjoboffers, getlastupdate],
  (offers, lastupdate) => offers.map(offer => Object.assign({}, offer, {
    isactive: (offer.ctime >= lastupdate),
    humandate: humandate(new Date(offer.date)),
    shorten: {
      title: shorten(offer.title, 60),
      description: shorten(offer.description, 100)
    }
  }))
);

export const getNextUpdate = createSelector(
  [getlastupdate],
  lastupdate =>
    ((lastupdate && (lastupdate + UPDATE_INTERVAL_MS)) || 0)
);
