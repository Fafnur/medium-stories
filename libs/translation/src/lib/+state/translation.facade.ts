import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromTranslationActions } from './translation.actions';
import { TranslationPartialState } from './translation.reducer';
import { translationQuery } from './translation.selectors';

@Injectable()
export class TranslationFacade {
  /**
   * Observed current language
   */
  currentLanguage$ = this.store.pipe(select(translationQuery.getCurrentLanguage));

  /**
   * Observed initialized
   */
  initialized$ = this.store.pipe(select(translationQuery.getInitialized));

  /**
   * Observed init error
   */
  initError$ = this.store.pipe(select(translationQuery.getInitError));

  /**
   * Observed initiating
   */
  initiating$ = this.store.pipe(select(translationQuery.getInitiating));

  /**
   * Observed default language
   */
  language$ = this.store.pipe(select(translationQuery.getLanguage));

  /**
   * Observed languages
   */
  languages$ = this.store.pipe(select(translationQuery.getLanguages));

  /**
   * Observed set error
   */
  setError$ = this.store.pipe(select(translationQuery.getSetError));

  /**
   * Observed setting
   */
  setting$ = this.store.pipe(select(translationQuery.getSetting));

  constructor(private store: Store<TranslationPartialState>) {}

  /**
   * Init translation
   * @param payload Force
   */
  init(payload?: boolean): void {
    this.store.dispatch(new fromTranslationActions.InitTranslation(payload));
  }

  /**
   * Set language
   * @param payload Language
   * @param force Force
   */
  setLanguage(payload?: string, force?: boolean): void {
    this.store.dispatch(new fromTranslationActions.SetLanguage(payload, force));
  }
}
