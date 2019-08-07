import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { TranslationPartialState } from './translation.reducer';
import { translationQuery } from './translation.selectors';
import { LoadTranslation } from './translation.actions';

@Injectable()
export class TranslationFacade {
  loaded$ = this.store.pipe(select(translationQuery.getLoaded));
  allTranslation$ = this.store.pipe(select(translationQuery.getAllTranslation));
  selectedTranslation$ = this.store.pipe(select(translationQuery.getSelectedTranslation));

  constructor(private store: Store<TranslationPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadTranslation());
  }
}
