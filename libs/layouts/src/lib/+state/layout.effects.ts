import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { LayoutPartialState } from './layout.reducer';
import { LoadLayout, LayoutLoaded, LayoutLoadError, LayoutActionTypes } from './layout.actions';

@Injectable()
export class LayoutEffects {
  @Effect() loadLayout$ = this.dataPersistence.fetch(LayoutActionTypes.LoadLayout, {
    run: (action: LoadLayout, state: LayoutPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new LayoutLoaded([]);
    },

    onError: (action: LoadLayout, error) => {
      console.error('Error', error);
      return new LayoutLoadError(error);
    }
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<LayoutPartialState>) {}
}
