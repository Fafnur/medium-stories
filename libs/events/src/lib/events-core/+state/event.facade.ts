import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { EventPayload, EventsPayload } from '../interfaces/event.interface';
import { fromEventActions } from './event.actions';
import { EventPartialState } from './event.reducer';
import { eventQuery } from './event.selectors';

@Injectable()
export class EventFacade {
  /**
   * Observed last event
   */
  eventLast$ = this.store.pipe(select(eventQuery.getEventLast));

  /**
   * Observed last event load error
   */
  eventLastLoadError$ = this.store.pipe(select(eventQuery.getEventLastLoadError));

  /**
   * Observed last event loading
   */
  eventLastLoading$ = this.store.pipe(select(eventQuery.getEventLastLoading));

  /**
   * Observed event
   */
  event$ = this.store.pipe(select(eventQuery.getEvent));

  /**
   * Observed event load error
   */
  eventLoadError$ = this.store.pipe(select(eventQuery.getEventLoadError));

  /**
   * Observed event loading
   */
  eventLoading$ = this.store.pipe(select(eventQuery.getEventLoading));

  /**
   * Observed events
   */
  events$ = this.store.pipe(select(eventQuery.getEvents));

  /**
   * Observed events load error
   */
  eventsLoadError$ = this.store.pipe(select(eventQuery.getEventsLoadError));

  /**
   * Observed events loading
   */
  eventsLoading$ = this.store.pipe(select(eventQuery.getEventsLoading));

  constructor(private store: Store<EventPartialState>) {}

  /**
   * Load event
   * @param payload Event payload
   */
  loadEvent(payload: Partial<EventPayload> & { id: number }): void {
    this.store.dispatch(new fromEventActions.LoadEvent(payload));
  }
  /**
   * Load last event
   * @param payload Force
   */
  loadLastEvent(payload?: boolean): void {
    this.store.dispatch(new fromEventActions.LoadLastEvent(payload));
  }

  /**
   * Load events
   * @param payload Events payload
   */
  loadEvents(payload: Partial<EventsPayload> = {}): void {
    this.store.dispatch(new fromEventActions.LoadEvents(payload));
  }
}
