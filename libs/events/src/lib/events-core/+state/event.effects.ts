import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { EventPartialState } from './event.reducer';
import { LoadEvent, EventLoaded, EventLoadError, EventActionTypes } from './event.actions';

@Injectable()
export class EventEffects {
  @Effect() loadEvent$ = this.dataPersistence.fetch(EventActionTypes.LoadEvent, {
    run: (action: LoadEvent, state: EventPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new EventLoaded([]);
    },

    onError: (action: LoadEvent, error) => {
      console.error('Error', error);
      return new EventLoadError(error);
    }
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<EventPartialState>) {}
}
