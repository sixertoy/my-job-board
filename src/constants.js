export const CARD_STATUS = {
  DONE: 'done',
  FEEDS: 'feeds',
  IN_PROGRESS: 'inprogress',
  TODO: 'todo',
  TRASHED: 'trashed',
};

export const EVENT_TYPES = {
  FORTUNE_COOKIES_LOADED: 'onFortuneCookiesLoaded',
  LOADING_COMPLETE: 'onloadingcomplete',
  LOADING_START: 'onloadingstart',
  OFFERS_LOADED: 'onoffersloaded',
  PERSIST_REHYDRATE: 'persist/REHYDRATE',
  THEME_CHANGE: 'onThemeChange',
};

// NOTE update chaque n heures (secondes * minutes * heure) * millisecondes
export const UPDATE_INTERVAL_MS = 60 * 60 * 1 * 1000;
