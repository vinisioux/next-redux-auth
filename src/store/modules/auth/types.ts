export enum AuthActionTypes {
  signInRequest = '@auth/SIGN_IN_REQUEST',
  signInSuccess = '@auth/SIGN_IN_SUCCESS',
  signInFailure = '@auth/SIGN_FAILURE',
  signOut = '@auth/SIGN_OUT',
  persist = 'persist/REHYDRATE',
}

export interface IAuthState {
  token: string | null;
  signed: boolean;
  loading: boolean;
}
