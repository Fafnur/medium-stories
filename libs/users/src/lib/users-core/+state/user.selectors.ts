import { createFeatureSelector, createSelector } from '@ngrx/store';

import { USER_FEATURE_KEY, UserState } from './user.reducer';

export const getUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const getUser = createSelector(getUserState, state => state.user);

export const getUserLoadError = createSelector(getUserState, state => state.userLoadError);

export const getUserLoadRun = createSelector(getUserState, state => state.userLoadRun);
