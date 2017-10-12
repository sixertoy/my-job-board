import { createSelector } from 'reselect';

// application
import { getJobOffers } from './appstates';
import { CARD_STATUS } from './../../constants';

export const getDoneItems = createSelector(
  [getJobOffers],
  offers => offers.filter(offer =>
    (offer.status === CARD_STATUS.DONE)) || []
);

export const getTodoItems = createSelector(
  [getJobOffers],
  offers => offers.filter(offer =>
    (offer.status === CARD_STATUS.TODO)) || []
);

export const getFeedsItems = createSelector(
  [getJobOffers],
  offers => offers.filter(offer =>
    (offer.status === CARD_STATUS.DEFAULT)) || []
);

export const getInProgressItems = createSelector(
  [getJobOffers],
  offers => offers.filter(offer =>
    (offer.status === CARD_STATUS.IN_PROGRESS)) || []
);
