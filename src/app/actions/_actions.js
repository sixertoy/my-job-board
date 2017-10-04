export const loadingStart = () => ({
  type: 'onloadingstart'
});

export const loadingComplete = () => ({
  type: 'onloadingcomplete'
});

export const feedsLoaded = (feedsitems, lastupdate = Date.now()) => ({
  type: 'onfeedsloaded',
  feedsitems,
  lastupdate
});
