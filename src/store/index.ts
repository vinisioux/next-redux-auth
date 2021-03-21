import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import { IAuthState } from './modules/auth/types';

import { rootReducer } from './modules/rootReducer';
import { rootSaga } from './modules/rootSaga';
import { persistConfig } from './persistReducer';

export interface IState {
  auth: IAuthState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

let store: Store;

const isClient = typeof window !== 'undefined';

if (isClient) {
  store = createStore(
    persistConfig(rootReducer),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
} else {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
