import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'redux';

export function persistConfig(reducers: Reducer) {
  const persistedReducer = persistReducer(
    {
      key: 'nameApp',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
}
