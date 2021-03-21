import { all, call, put, takeLatest } from 'redux-saga/effects';
import { useRouter } from 'next/router';

import { api } from '../../../services/api';
import { signFailure, signInRequest, signInSuccess } from './actions';
import { AuthActionTypes } from './types';

type SignInRequest = ReturnType<typeof signInRequest>;
type SignInSuccess = ReturnType<typeof signInSuccess>;

export function* signIn({ payload }: SignInRequest) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    const route = useRouter();

    console.log('a');

    yield route.push('/dashboard');
  } catch {
    yield put(signFailure());
  }
}

export function setToken({ payload }: SignInSuccess) {
  if (!payload) return;

  const { token } = payload;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export const user = all([
  takeLatest(AuthActionTypes.persist, setToken),
  takeLatest(AuthActionTypes.signInRequest, signIn),
]);
