export const loadingStart = () => ({
  type: 'onloadingstart'
});

export const loadingComplete = () => ({
  type: 'onloadingcomplete'
});

export const feedsLoaded = feedsitems => ({
  type: 'onfeedsloaded',
  feedsitems
});
