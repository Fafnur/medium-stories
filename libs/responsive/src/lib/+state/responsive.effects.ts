import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ResponsivePartialState } from './responsive.reducer';
import { LoadResponsive, ResponsiveLoaded, ResponsiveLoadError, ResponsiveActionTypes } from './responsive.actions';

@Injectable()
export class ResponsiveEffects {
  @Effect() loadResponsive$ = this.dataPersistence.fetch(ResponsiveActionTypes.LoadResponsive, {
    run: (action: LoadResponsive, state: ResponsivePartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new ResponsiveLoaded([]);
    },

    onError: (action: LoadResponsive, error) => {
      console.error('Error', error);
      return new ResponsiveLoadError(error);
    }
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<ResponsivePartialState>) {}
}
