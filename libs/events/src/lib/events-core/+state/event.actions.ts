import { Action } from '@ngrx/store';
import { Entity } from './event.reducer';

export enum EventActionTypes {
  LoadEvent = '[Event] Load Event',
  EventLoaded = '[Event] Event Loaded',
  EventLoadError = '[Event] Event Load Error'
}

export class LoadEvent implements Action {
  readonly type = EventActionTypes.LoadEvent;
}

export class EventLoadError implements Action {
  readonly type = EventActionTypes.EventLoadError;
  constructor(public payload: any) {}
}

export class EventLoaded implements Action {
  readonly type = EventActionTypes.EventLoaded;
  constructor(public payload: Entity[]) {}
}

export type EventAction = LoadEvent | EventLoaded | EventLoadError;

export const fromEventActions = {
  LoadEvent,
  EventLoaded,
  EventLoadError
};
