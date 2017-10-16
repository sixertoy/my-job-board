import { createSelector } from 'reselect';


// application
import { shorten } from './../utils/shorten';
import { CARD_STATUS } from './../../constants';
import { humandate } from './../utils/humandate';

const getjoboffers = state => state.joboffers;
const getlastupdate = state => state.lastupdate;

export const getJobOffers = createSelector(
  [getjoboffers, getlastupdate],
  (offers, lastupdate) => offers.map(offer => Object.assign({}, offer, {
    event: offer.event || false,
    comment: offer.comment || '',
    contact: offer.contact || '',
    emailsent: offer.emailsent || false,
    isactive: (offer.ctime >= lastupdate),
    humandate: humandate(new Date(offer.date)),
    shorten: {
      title: shorten(offer.title, 60),
      description: shorten(offer.description, 100)
    }
  }))
);

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
