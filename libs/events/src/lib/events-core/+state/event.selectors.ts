import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EVENT_FEATURE_KEY, EventState } from './event.reducer';

const getEventState = createFeatureSelector<EventState>(EVENT_FEATURE_KEY);

const getEventLast = createSelector(getEventState, state => state.eventLast);

const getEventLastLoadError = createSelector(getEventState, state => state.eventLastLoadError);

const getEventLastLoading = createSelector(getEventState, state => state.eventLastLoading);

const getEvent = createSelector(getEventState, state => state.event);

const getEventLoadError = createSelector(getEventState, state => state.eventLoadError);

const getEventLoading = createSelector(getEventState, state => state.eventLoading);

const getEvents = createSelector(getEventState, state => state.events);

const getEventsLoadError = createSelector(getEventState, state => state.eventsLoadError);

const getEventsLoading = createSelector(getEventState, state => state.eventsLoading);

export const eventQuery = {
  getEventLast,
  getEventLastLoadError,
  getEventLastLoading,
  getEvent,
  getEventLoadError,
  getEventLoading,
  getEvents,
  getEventsLoadError,
  getEventsLoading
};
