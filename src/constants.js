export const CARD_STATUS = {
  DONE: 'done',
  FEEDS: 'feeds',
  IN_PROGRESS: 'inprogress',
  TODO: 'todo',
  TRASHED: 'trashed',
};

export const EVENT_TYPES = {
  LOADING_COMPLETE: 'onloadingcomplete',
  LOADING_START: 'onloadingstart',
  OFFERS_LOADED: 'onoffersloaded',
};

// update chaque n heures (secondes, (minutes, heure), millisecondes)
export const UPDATE_INTERVAL_MS = 60 * (60 * 128) * 1000;
