import { Action, createReducer, on } from '@ngrx/store';
import { ApolloError } from 'apollo-client';

import { SignInPayload } from '@medium-stories/entities';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  /**
   * Login data
   */
  signIn: SignInPayload;

  /**
   * Sign in errors
   */
  signInError?: ApolloError;

  /**
   * Sign in error
   */
  signInRun: boolean;

  /**
   * Sign out error
   */
  signOutError?: ApolloError;

  /**
   * Sign out error
   */
  signOutRun: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authInitialState: AuthState = {
  signIn: null,
  signInError: null,
  signInRun: false,
  signOutError: null,
  signOutRun: false
};

const authReducer = createReducer(
  authInitialState,
  on(AuthActions.signInSet, (state, { payload }) => ({
    ...state,
    signIn: payload
  })),
  on(AuthActions.signInClear, state => ({
    ...state,
    signIn: null
  })),
  on(AuthActions.signInRun, state => ({
    ...state,
    signInError: null,
    signInRun: true
  })),
  on(AuthActions.signInSuccess, (state, { payload }) => ({
    ...state,
    signIn: null,
    signInRun: false
  })),
  on(AuthActions.signInFailure, (state, { error }) => ({
    ...state,
    signInError: error,
    signInRun: false
  })),
  on(AuthActions.signOutRun, state => ({
    ...state,
    signOutError: null,
    signOutRun: true
  })),
  on(AuthActions.signOutSuccess, state => ({
    ...state,
    signOutRun: false
  })),
  on(AuthActions.signOutFailure, (state, { error }) => ({
    ...state,
    signOutError: error,
    signOutRun: false
  }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
