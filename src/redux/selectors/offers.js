import { createSelector } from 'reselect';

import { CARD_STATUS } from '../../constants';
import { humandate } from '../utils/humandate';
// application
import { shorten } from '../utils/shorten';

const getOffers = state => state.offers;
const getlastupdate = state => state.lastupdate;

export const getJobOffers = createSelector(
  [getOffers, getlastupdate],
  (offers, lastupdate) =>
    offers.map(offer => ({
      ...offer,
      comment: offer.comment || '',
      contact: offer.contact || '',
      emailsent: offer.emailsent || false,
      event: offer.event || false,
      humandate: humandate(new Date(offer.date)),
      isactive: offer.ctime >= lastupdate,
      shorten: {
        description: shorten(offer.description, 100),
        title: shorten(offer.title, 60),
      },
    }))
);

export const getDoneItems = createSelector(
  [getJobOffers],
  offers => offers.filter(offer => offer.status === CARD_STATUS.DONE) || []
);

export const getTodoItems = createSelector(
  [getJobOffers],
  offers => offers.filter(offer => offer.status === CARD_STATUS.TODO) || []
);

export const getFeedsItems = createSelector(
  [getJobOffers],
  offers => offers.filter(offer => offer.status === CARD_STATUS.DEFAULT) || []
);

export const getInProgressItems = createSelector(
  [getJobOffers],
  offers =>
    offers.filter(offer => offer.status === CARD_STATUS.IN_PROGRESS) || []
);
