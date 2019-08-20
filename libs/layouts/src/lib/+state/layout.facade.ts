import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromLayoutActions, HoveredNavItemPayload } from './layout.actions';
import { LayoutPartialState } from './layout.reducer';
import { layoutQuery } from './layout.selectors';

@Injectable()
export class LayoutFacade {
  /**
   * Observed opened side menu
   */
  openedSideMenu$ = this.store.pipe(select(layoutQuery.getOpenedSideMenu));

  /**
   * Observed opened side menu
   */
  showNavSubMenu$ = this.store.pipe(select(layoutQuery.getShowNavSubMenu));

  /**
   * Observed hovered nav item
   */
  hoveredNavItemByLevel$ = level => this.store.pipe(select(layoutQuery.getHoveredNavItemByLevel(), { level }));

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
   * Set hovered nav item
   */
  setNavItem(payload: HoveredNavItemPayload): void {
    this.store.dispatch(new fromLayoutActions.SetHoveredNavItem(payload));
  }

  /**
   * Toggle hovered nav item
   */
  toggleNavItem(payload: HoveredNavItemPayload): void {
    this.store.dispatch(new fromLayoutActions.ToggleHoveredNavItem(payload));
  }

  /**
   * Toggle side menu
   */
  toggleSideMenu(): void {
    this.store.dispatch(new fromLayoutActions.ToggleSideMenu());
  }
}
