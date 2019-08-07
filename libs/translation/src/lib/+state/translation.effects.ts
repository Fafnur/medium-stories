import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { TranslationPartialState } from './translation.reducer';
import { LoadTranslation, TranslationLoaded, TranslationLoadError, TranslationActionTypes } from './translation.actions';

@Injectable()
export class TranslationEffects {
  @Effect() loadTranslation$ = this.dataPersistence.fetch(TranslationActionTypes.LoadTranslation, {
    run: (action: LoadTranslation, state: TranslationPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new TranslationLoaded([]);
    },

    onError: (action: LoadTranslation, error) => {
      console.error('Error', error);
      return new TranslationLoadError(error);
    }
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<TranslationPartialState>) {}
}
