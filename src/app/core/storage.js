/* global window */
/* eslint
  no-console: 0,
  no-underscore-dangle: 0 */
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, purgeStoredState, autoRehydrate } from 'redux-persist';

// application
import { whitelist, blacklist, reducers } from './../reducers';

const debugStored = () => {};

const opts = {
  whitelist,
  blacklist,
  keyPrefix: 'LocalStorageKey::'
};

export const clearPersistentStorage = () =>
  // https://git.io/v9hbh
  purgeStoredState({}, opts.whitelist)
    .then(() => console.log('purged of whitelist success'))
    .catch(() => console.log('purge of someReducer failed'));

/**
 * Il est important d'encapsuler la creation des stores
 * dans une function pour les tests unitaires
 */
export const configure = (history) => {
  const middleware = routerMiddleware(history);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // charge les states existants dans le localStorage
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, middleware)),
    autoRehydrate()
  );
  persistStore(store, opts, () => debugStored());
  return store;
};

export default configure;
