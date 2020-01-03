import { Action } from '@ngrx/store';
import { ApolloError } from 'apollo-client';

import { Event } from '@medium-stories/entities';

import { EventPayload, EventsPayload } from '../interfaces/event.interface';

export enum EventActionTypes {
  LoadEvents = '[Event] Load events',
  EventsLoadCanceled = '[Event] Events load canceled',
  LoadingEvents = '[Event] Loading events',
  EventsLoaded = '[Event] Events loaded',
  EventsLoadError = '[Event] Events load error',

  LoadEvent = '[Event] Load event',
  EventLoadCanceled = '[Event] Event load canceled',
  LoadingEvent = '[Event] Loading event',
  EventLoaded = '[Event] Event loaded',
  EventLoadError = '[Event] Event load error',

  LoadLastEvent = '[Event] Load last event',
  LastEventLoadCanceled = '[Event] Last event load canceled',
  LoadingLastEvent = '[Event] Loading last event',
  LastEventLoaded = '[Event] Last event loaded',
  LastEventLoadError = '[Event] Last event load error'
}

export class LoadEvents implements Action {
  readonly type = EventActionTypes.LoadEvents;

  constructor(public payload: Partial<EventsPayload>) {}
}

export class EventsLoadCanceled implements Action {
  readonly type = EventActionTypes.EventsLoadCanceled;
}

export class LoadingEvents implements Action {
  readonly type = EventActionTypes.LoadingEvents;

  constructor(public payload: Partial<EventsPayload>) {}
}

export class EventsLoaded implements Action {
  readonly type = EventActionTypes.EventsLoaded;

  constructor(public payload: Event[]) {}
}

export class EventsLoadError implements Action {
  readonly type = EventActionTypes.EventsLoadError;

  constructor(public payload: ApolloError) {}
}

export class LoadEvent implements Action {
  readonly type = EventActionTypes.LoadEvent;

  constructor(public payload: Partial<EventPayload>) {}
}

export class EventLoadCanceled implements Action {
  readonly type = EventActionTypes.EventLoadCanceled;
}

export class LoadingEvent implements Action {
  readonly type = EventActionTypes.LoadingEvent;

  constructor(public payload: Partial<EventPayload>) {}
}

export class EventLoaded implements Action {
  readonly type = EventActionTypes.EventLoaded;

  constructor(public payload: Event) {}
}

export class EventLoadError implements Action {
  readonly type = EventActionTypes.EventLoadError;

  constructor(public payload: ApolloError) {}
}

export class LoadLastEvent implements Action {
  readonly type = EventActionTypes.LoadLastEvent;

  constructor(public payload?: boolean) {}
}

export class LastEventLoadCanceled implements Action {
  readonly type = EventActionTypes.LastEventLoadCanceled;
}

export class LoadingLastEvent implements Action {
  readonly type = EventActionTypes.LoadingLastEvent;
}

export class LastEventLoaded implements Action {
  readonly type = EventActionTypes.LastEventLoaded;

  constructor(public payload: Event) {}
}

export class LastEventLoadError implements Action {
  readonly type = EventActionTypes.LastEventLoadError;

  constructor(public payload: ApolloError) {}
}

export type EventAction =
  | LoadEvents
  | EventsLoadCanceled
  | LoadingEvents
  | EventsLoaded
  | EventsLoadError
  | LoadEvent
  | EventLoadCanceled
  | LoadingEvent
  | EventLoaded
  | EventLoadError
  | LoadLastEvent
  | LastEventLoadCanceled
  | LoadingLastEvent
  | LastEventLoaded
  | LastEventLoadError;

export const fromEventActions = {
  LoadEvents,
  EventsLoadCanceled,
  LoadingEvents,
  EventsLoaded,
  EventsLoadError,

  LoadEvent,
  EventLoadCanceled,
  LoadingEvent,
  EventLoaded,
  EventLoadError,

  LoadLastEvent,
  LastEventLoadCanceled,
  LoadingLastEvent,
  LastEventLoaded,
  LastEventLoadError
};
