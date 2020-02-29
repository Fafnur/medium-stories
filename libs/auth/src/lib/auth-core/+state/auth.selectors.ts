import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const getSignIn = createSelector(getAuthState, state => state.signIn);

export const getSignInError = createSelector(getAuthState, state => state.signInError);

export const getSignInRun = createSelector(getAuthState, state => state.signInRun);

export const getSignOutError = createSelector(getAuthState, state => state.signOutError);

export const getSignOutRun = createSelector(getAuthState, state => state.signOutRun);
