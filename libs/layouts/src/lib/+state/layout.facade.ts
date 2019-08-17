import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { LayoutPartialState } from './layout.reducer';
import { layoutQuery } from './layout.selectors';
import { LoadLayout } from './layout.actions';

@Injectable()
export class LayoutFacade {
  loaded$ = this.store.pipe(select(layoutQuery.getLoaded));
  allLayout$ = this.store.pipe(select(layoutQuery.getAllLayout));
  selectedLayout$ = this.store.pipe(select(layoutQuery.getSelectedLayout));

  constructor(private store: Store<LayoutPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadLayout());
  }
}
