export const loadingStart = () => ({
  type: 'onloadingstart'
});

export const loadingComplete = () => ({
  type: 'onloadingcomplete'
});

export const offersLoaded = (joboffers, now) => ({
  type: 'onoffersloaded',
  joboffers,
  now
});

export const filterFeeds = inputvalue => ({
  type: 'onfilterfeeds',
  inputvalue
});
