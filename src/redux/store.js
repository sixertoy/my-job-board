// import { isDevelopment } from '@iziges/napper-core';
import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore, purgeStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';

import { blacklist, createRootReducer, whitelist } from './reducers';

const persistConfig = {
  blacklist,
  key: 'LocalStorageKey::',
  storage,
  whitelist,
};

function debugStored() {}

function bindMiddleware(middleware = []) {
  const appliedMiddlewares = applyMiddleware(...middleware);
  // if (isDevelopment()) {
  const composeEnhancers = composeWithDevTools({});
  return composeEnhancers(appliedMiddlewares);
  // }
  // return appliedMiddlewares;
}

export const clearPersistentStorage = () =>
  // https://git.io/v9hbh
  purgeStoredState({}, persistConfig.whitelist)
    .then(() => console.log('purged of whitelist success'))
    .catch(() => console.log('purge of someReducer failed'));

export const configure = (history, initialState = {}) => {
  // const middleware = routerMiddleware(history);
  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    bindMiddleware([ReduxThunk])
  );
  const persistor = persistStore(store, null, () => debugStored());
  return { persistor, store };
};
