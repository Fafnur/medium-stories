import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromLayoutActions } from './layout.actions';
import { LayoutPartialState } from './layout.reducer';
import { layoutQuery } from './layout.selectors';

@Injectable()
export class LayoutFacade {
  /**
   * Observed hovered nav item
   */
  hoveredNavItem$ = this.store.pipe(select(layoutQuery.getHoveredNavItem));

  /**
   * Observed hovered nav sub item
   */
  hoveredNavSubItem$ = this.store.pipe(select(layoutQuery.getHoveredNavSubItem));

  /**
   * Observed hovered nav sub item
   */
  hoveredNavSubSubItem$ = this.store.pipe(select(layoutQuery.getHoveredNavSubSubItem));

  /**
   * Observed opened side menu
   */
  openedSideMenu$ = this.store.pipe(select(layoutQuery.getOpenedSideMenu));

  /**
   * Observed opened side menu
   */
  showNavSubMenu$ = this.store.pipe(select(layoutQuery.getShowNavSubMenu));

  constructor(private store: Store<LayoutPartialState>) {}

  /**
   * Close mobile menu
   */
  closeSideMenu(): void {
    this.store.dispatch(new fromLayoutActions.CloseSideMenu());
  }

  /**
   * Hide nav sub menus
   */
  hideSubMenu(): void {
    this.store.dispatch(new fromLayoutActions.HideNavSubMenu());
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

  /**
   * Set hovered nav item
   */
  setNavItem(id: number, showNavSubMenu: boolean): void {
    this.store.dispatch(new fromLayoutActions.SetHoveredNavItem({ id, showNavSubMenu }));
  }

  /**
   * Set hovered sub nav item
   */
  setNavSubItem(payload: number): void {
    this.store.dispatch(new fromLayoutActions.SetHoveredNavSubItem(payload));
  }

  /**
   * Set hovered  sub sub nav item
   */
  setNavSubSubItem(payload: number): void {
    this.store.dispatch(new fromLayoutActions.SetHoveredNavSubSubItem(payload));
  }
}
