import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { AbstractEffects } from '@medium-stories/store';

import { TranslationService } from '../interfaces/translation-service.interface';
import {
  InitiatingTranslation,
  InitTranslation,
  LanguageSet,
  LanguageSetCanceled,
  LanguageSetError,
  SetLanguage,
  SettingLanguage,
  TranslationActionTypes,
  TranslationInitCanceled,
  TranslationInitError,
  TranslationInitialized
} from './translation.actions';
import { TRANSLATION_FEATURE_KEY, TranslationPartialState, TranslationState } from './translation.reducer';

@Injectable()
export class TranslationEffects extends AbstractEffects<TranslationState> {
  @Effect() init$ = this.dataPersistence.fetch(TranslationActionTypes.InitTranslation, {
    run: (action: InitTranslation, store: TranslationPartialState) => {
      const state = this.getState(store);

      return !state.initiating ? new InitiatingTranslation() : new TranslationInitCanceled();
    },
    onError: (action: InitTranslation, error) => console.error(error.toString())
  });

  @Effect() initiating$ = this.dataPersistence.fetch(TranslationActionTypes.InitiatingTranslation, {
    run: (action: InitiatingTranslation, store: TranslationPartialState) => {
      const config = this.translationService.getConfig();
      return this.translationService
        .init(this.translationService.getConfig())
        .pipe(map<any, TranslationInitialized>(data => new TranslationInitialized(config)));
    },
    onError: (action: InitiatingTranslation, error) => new TranslationInitError(error.toString())
  });

  @Effect() set$ = this.dataPersistence.fetch(TranslationActionTypes.SetLanguage, {
    run: (action: SetLanguage, store: TranslationPartialState) => {
      const state = this.getState(store);

      return !state.setting || action.force
        ? state.languages.includes(action.payload)
          ? new SettingLanguage(action.payload)
          : new LanguageSetError(`Language isn't supported`)
        : new LanguageSetCanceled();
    },
    onError: (action: SetLanguage, error) => console.error(error.toString())
  });

  @Effect() setting$ = this.dataPersistence.fetch(TranslationActionTypes.SettingLanguage, {
    run: (action: SettingLanguage, store: TranslationPartialState) => {
      return this.translationService.setLanguage(action.payload).pipe(map<any, LanguageSet>(() => new LanguageSet()));
    },
    onError: (action: SettingLanguage, error) => new LanguageSetError(error.toString())
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TranslationPartialState>,
    private translationService: TranslationService
  ) {
    super(TRANSLATION_FEATURE_KEY);
  }
}
