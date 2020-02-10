export const CARD_STATUS = {
  DONE: { key: 'DONE', label: 'Fait', priority: 3 },
  FEEDS: { key: 'FEEDS', label: 'A trier', priority: 0 },
  IN_PROGRESS: { key: 'IN_PROGRESS', label: 'Avancé', priority: 2 },
  TODO: { key: 'TODO', label: 'A faire', priority: 1 },
  TRASHED: { key: 'TRASHED', label: 'Poubelle', priority: -1 },
};

export const EVENT_TYPES = {
  FORTUNE_COOKIES_LOADED: 'onFortuneCookiesLoaded',
  LOADING_COMPLETE: 'onLoadingComplete',
  LOADING_START: 'onLoadingStart',
  MOVE_CARD_STATUS: 'onMoveCardStatus',
  OFFERS_LOADED: 'onOffersLoaded',
  PERSIST_REHYDRATE: 'persist/REHYDRATE',
  THEME_CHANGE: 'onThemeChange',
};

// NOTE update chaque n heures (secondes * minutes * heure) * millisecondes
export const UPDATE_INTERVAL_MS = 60 * 60 * 1 * 1000;
