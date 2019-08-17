import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromLayoutActions } from './layout.actions';
import { LayoutPartialState } from './layout.reducer';
import { layoutQuery } from './layout.selectors';

@Injectable()
export class LayoutFacade {
  /**
   * Observed opened side menu
   */
  openedSideMenu$ = this.store.pipe(select(layoutQuery.getOpenedSideMenu));

  constructor(private store: Store<LayoutPartialState>) {}

  /**
   * Close mobile menu
   */
  closeSideMenu(): void {
    this.store.dispatch(new fromLayoutActions.CloseSideMenu());
  }

  /**
   * Close mobile menu
   */
  openSideMenu(): void {
    this.store.dispatch(new fromLayoutActions.OpenSideMenu());
  }

  /**
   * Toggle mobile menu
   */
  toggleSideMenu(): void {
    this.store.dispatch(new fromLayoutActions.ToggleSideMenu());
  }
}
