import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { ApolloError } from 'apollo-client';
import { map } from 'rxjs/operators';

import { Event } from '@medium-stories/entities';
import { AbstractEffects } from '@medium-stories/store';

import { EVENT_FEATURE_KEY, EventPartialState, EventState } from './event.reducer';
import {
  EventActionTypes,
  EventLoadCanceled,
  EventLoaded,
  EventLoadError,
  EventsLoadCanceled,
  EventsLoaded,
  EventsLoadError,
  LoadEvent,
  LoadEvents,
  LoadingEvent,
  LoadingEvents
} from './event.actions';
import { EventApollo } from '../interfaces/event-apollo.interface';

@Injectable()
export class EventEffects extends AbstractEffects<EventState> {
  @Effect() loadEvent$ = this.dataPersistence.fetch(EventActionTypes.LoadEvent, {
    run: (action: LoadEvent, store: EventPartialState) => {
      return isPlatformBrowser(this.platformId) && (!this.getState(store).eventLoading || action.payload.force)
        ? new LoadingEvent(action.payload)
        : new EventLoadCanceled();
    },
    onError: (action: LoadEvent, error: any) => console.error(error.toString())
  });

  @Effect() loadingEvent$ = this.dataPersistence.fetch(EventActionTypes.LoadingEvent, {
    id: (action: LoadingEvent) => this.getIdByPayload(action.payload),
    run: (action: LoadingEvent, store: EventPartialState) => {
      return this.eventApollo.loadEvent(action.payload.id).pipe(map<Event, EventLoaded>(event => new EventLoaded(event)));
    },
    onError: (action: LoadingEvent, error: ApolloError) => new EventLoadError(error)
  });

  @Effect() loadEvents$ = this.dataPersistence.fetch(EventActionTypes.LoadEvents, {
    run: (action: LoadEvents, store: EventPartialState) => {
      return isPlatformBrowser(this.platformId) && (!this.getState(store).eventsLoading || action.payload.force)
        ? new LoadingEvents(action.payload)
        : new EventsLoadCanceled();
    },
    onError: (action: LoadEvents, error: any) => console.error(error.toString())
  });

  @Effect() loadingEvents$ = this.dataPersistence.fetch(EventActionTypes.LoadingEvents, {
    id: (action: LoadingEvents) => this.getIdByPayload(action.payload),
    run: (action: LoadingEvents, store: EventPartialState) => {
      return this.eventApollo.loadEvents(action.payload).pipe(map<Event[], EventsLoaded>(event => new EventsLoaded(event)));
    },
    onError: (action: LoadingEvents, error: ApolloError) => new EventsLoadError(error)
  });

  constructor(
    private dataPersistence: DataPersistence<EventPartialState>,
    private eventApollo: EventApollo,
    /* tslint:disable-next-line:ban-types */
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    super(EVENT_FEATURE_KEY);
  }
}
