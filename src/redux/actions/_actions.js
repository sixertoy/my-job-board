export const offersLoaded = (joboffers, now) => ({
  joboffers,
  now,
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
