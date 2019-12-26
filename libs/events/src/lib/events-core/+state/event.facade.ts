import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { EventPartialState } from './event.reducer';
import { eventQuery } from './event.selectors';
import { LoadEvent } from './event.actions';

@Injectable()
export class EventFacade {
  loaded$ = this.store.pipe(select(eventQuery.getLoaded));
  allEvent$ = this.store.pipe(select(eventQuery.getAllEvent));

  constructor(private store: Store<EventPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadEvent());
  }
}
