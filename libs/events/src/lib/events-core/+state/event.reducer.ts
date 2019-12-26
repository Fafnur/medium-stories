import { EventAction, EventActionTypes } from './event.actions';

export const EVENT_FEATURE_KEY = 'event';

/**
 * Interface for the 'Event' data used in
 *  - EventState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface EventState {
  list: Entity[]; // list of Event; analogous to a sql normalized table
  selectedId?: string | number; // which Event record has been selected
  loaded: boolean; // has the Event list been loaded
  error?: any; // last none error (if any)
}

export interface EventPartialState {
  readonly [EVENT_FEATURE_KEY]: EventState;
}

export const eventInitialState: EventState = {
  list: [],
  loaded: false
};

export function eventReducer(state: EventState = eventInitialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionTypes.EventLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
