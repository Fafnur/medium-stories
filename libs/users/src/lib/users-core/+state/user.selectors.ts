import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, State, UserPartialState, userAdapter } from './user.reducer';

// Lookup the 'User' feature state managed by NgRx
export const getUserState = createFeatureSelector<UserPartialState, State>(USER_FEATURE_KEY);

const { selectAll, selectEntities } = userAdapter.getSelectors();

export const getUserLoaded = createSelector(getUserState, (state: State) => state.loaded);

export const getUserError = createSelector(getUserState, (state: State) => state.error);

export const getAllUser = createSelector(getUserState, (state: State) => selectAll(state));

export const getUserEntities = createSelector(getUserState, (state: State) => selectEntities(state));

export const getSelectedId = createSelector(getUserState, (state: State) => state.selectedId);

export const getSelected = createSelector(getUserEntities, getSelectedId, (entities, selectedId) => selectedId && entities[selectedId]);
