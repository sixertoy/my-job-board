// import { isDevelopment } from '@nappr/nappr-core';
import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore, purgeStoredState } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

import { reduxPersistConfig } from '../redux/initial-state';
import createRootReducer from '../redux/reducers';

function debugStored() {}

function bindMiddleware(middleware = []) {
  const appliedMiddlewares = applyMiddleware(...middleware);
  // NOTE utiliser nappr-core/Logger
  // if (isDevelopment()) {
  const composeEnhancers = composeWithDevTools({});
  return composeEnhancers(appliedMiddlewares);
  // }
  // return appliedMiddlewares;
}

export const clearPersistentStorage = () =>
  // https://git.io/v9hbh
  purgeStoredState({}, reduxPersistConfig.whitelist)
    .then(() => {
      // console.log('purged of whitelist success')
    })
    .catch(() => {
      // console.log('purge of someReducer failed')
    });

export const configure = (history, initialState = {}) => {
  // const middleware = routerMiddleware(history);
  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(reduxPersistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    bindMiddleware([ReduxThunk])
  );
  const persistor = persistStore(store, null, () => debugStored());
  return { persistor, store };
};
