import { all } from 'redux-saga/effects';

import { user } from './auth/sagas';

export function* rootSaga() {
  return yield all([user]);
}
