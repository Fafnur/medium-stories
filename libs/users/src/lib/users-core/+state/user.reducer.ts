import { Action, createReducer, on } from '@ngrx/store';
import { ApolloError } from 'apollo-client';

import { User } from '@medium-stories/entities';

import * as UserActions from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  /**
   * User entity
   */
  user: User;

  /**
   * User load run
   */
  userLoadRun: boolean;

  /**
   * User load error
   */
  userLoadError?: ApolloError;
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}

export const userInitialState: UserState = {
  user: null,
  userLoadRun: false,
  userLoadError: null
};

const userReducer = createReducer(
  userInitialState,
  on(UserActions.loadUserRun, state => ({
    ...state,
    userLoadError: null,
    userLoadRun: true
  })),
  on(UserActions.loadUserSuccess, (state, { payload }) => ({
    ...state,
    user: payload,
    userLoadRun: false
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    userLoadError: error,
    userLoadRun: false
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
