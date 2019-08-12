import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { ResponsivePartialState } from './responsive.reducer';
import { responsiveQuery } from './responsive.selectors';
import { LoadResponsive } from './responsive.actions';

@Injectable()
export class ResponsiveFacade {
  loaded$ = this.store.pipe(select(responsiveQuery.getLoaded));
  allResponsive$ = this.store.pipe(select(responsiveQuery.getAllResponsive));
  selectedResponsive$ = this.store.pipe(select(responsiveQuery.getSelectedResponsive));

  constructor(private store: Store<ResponsivePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadResponsive());
  }
}
