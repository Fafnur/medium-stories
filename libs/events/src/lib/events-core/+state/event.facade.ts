import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { EventPayload, EventsPayload } from '../interfaces/event.interface';
import { fromEventActions } from './event.actions';
import { EventPartialState } from './event.reducer';
import { eventQuery } from './event.selectors';

@Injectable()
export class EventFacade {
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
   * Load events
   * @param payload Events payload
   */
  loadEvents(payload: Partial<EventsPayload> = {}): void {
    this.store.dispatch(new fromEventActions.LoadEvent(payload));
  }
}
