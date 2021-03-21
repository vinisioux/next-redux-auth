import { AuthActionTypes } from './types';

export function signInRequest(email: string, password: string) {
  return {
    type: AuthActionTypes.signInRequest,
    payload: { email, password },
  };
}

export function signInSuccess(token: string, user: {}) {
  return {
    type: AuthActionTypes.signInSuccess,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: AuthActionTypes.signInFailure,
  };
}

export function signOut() {
  return {
    type: AuthActionTypes.signOut,
  };
}
