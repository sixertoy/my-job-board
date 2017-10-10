export const loadingStart = () => ({
  type: 'onloadingstart'
});

export const loadingComplete = () => ({
  type: 'onloadingcomplete'
});

export const jobOffersLoaded = (joboffers, now) => ({
  type: 'onjoboffersloaded',
  joboffers,
  now
});
