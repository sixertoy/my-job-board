export const loadingStart = () => ({
  type: 'onloadingstart'
});

export const loadingComplete = () => ({
  type: 'onloadingcomplete'
});

export const offersLoaded = (items, now) => ({
  type: 'onoffersloaded',
  items,
  now
});
