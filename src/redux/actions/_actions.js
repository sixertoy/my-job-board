export const offersLoaded = (offers, now) => ({
  now,
  offers,
});

export const filterFeeds = inputvalue => ({
  inputvalue,
  type: 'onfilterfeeds',
});

export const offerFieldChange = (inputvalue, offerid, fieldname) => ({
  fieldname,
  inputvalue,
  offerid,
  type: 'onofferfieldchange',
});
