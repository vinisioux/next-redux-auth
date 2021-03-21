import { Reducer } from 'redux';
import produce from 'immer';

import { AuthActionTypes, IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  token: null,
  loading: false,
  signed: false,
};

export const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case AuthActionTypes.signInRequest: {
        draft.loading = true;
        break;
      }
      case AuthActionTypes.signInSuccess: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case AuthActionTypes.signInFailure: {
        draft.loading = false;
        break;
      }
      case AuthActionTypes.signOut: {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
