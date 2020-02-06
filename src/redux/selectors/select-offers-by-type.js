import { createSelector } from 'reselect';

// import { humandate } from '../utils/humandate';
// import { shorten } from '../utils/shorten';

const getOffers = state => state.offers;
const getColumnType = (state, type) => type;
const getLastFeedUpdate = state => state.lastFeedUpdate;

const selectOffersByType = createSelector(
  [getOffers, getLastFeedUpdate, getColumnType],
  (offers, lastFeedUpdate, type) => {
    return offers
      .filter(({ status }) => status === type)
      .map(offer => ({
        ...offer,
        comment: offer.comment || '',
        contact: offer.contact || '',
        emailsent: offer.emailsent || false,
        event: offer.event || false,
        // humandate: humandate(new Date(offer.date)),
        isactive: offer.ctime >= lastFeedUpdate,
        // shorten: {
        //   description: shorten(offer.description, 100),
        //   title: shorten(offer.title, 60),
        // },
      }));
  }
);

export default selectOffersByType;
