import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EVENT_FEATURE_KEY, EventState } from './event.reducer';

const getEventState = createFeatureSelector<EventState>(EVENT_FEATURE_KEY);

const getLoaded = createSelector(getEventState, (state: EventState) => state.loaded);

const getError = createSelector(getEventState, (state: EventState) => state.error);

const getAllEvent = createSelector(getEventState, getLoaded, (state: EventState, isLoaded) => {
  return isLoaded ? state.list : [];
});

const getSelectedId = createSelector(getEventState, (state: EventState) => state.selectedId);

export const eventQuery = {
  getLoaded,
  getError,
  getAllEvent
};
