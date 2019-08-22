import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSideMenu = '[Layout] Open side menu',
  CloseSideMenu = '[Layout] Close side menu',
  ToggleSideMenu = '[Layout] Toggle side menu',

  SetHoveredNavItem = '[Layout] Set hovered nav item',
  ToggleHoveredNavItem = '[Layout] Toggle hovered nav item',
  HideNavSubMenu = '[Layout] Hide nav sub menu'
}

export class OpenSideMenu implements Action {
  readonly type = LayoutActionTypes.OpenSideMenu;
}

export class CloseSideMenu implements Action {
  readonly type = LayoutActionTypes.CloseSideMenu;
}

export class ToggleSideMenu implements Action {
  readonly type = LayoutActionTypes.ToggleSideMenu;
}

export interface HoveredNavItemPayload {
  id?: string;

  /**
   * Index on nav menu item
   */
  index: number;

  /**
   * Level  menu
   */
  level: number;

  /**
   * Show sub nav  menu
   */
  showedSubmenu?: boolean;
}

export class SetHoveredNavItem implements Action {
  readonly type = LayoutActionTypes.SetHoveredNavItem;

  constructor(public payload: HoveredNavItemPayload) {}
}

export class ToggleHoveredNavItem implements Action {
  readonly type = LayoutActionTypes.ToggleHoveredNavItem;

  constructor(public payload: HoveredNavItemPayload) {}
}

export class HideNavSubMenu implements Action {
  readonly type = LayoutActionTypes.HideNavSubMenu;
}

export type LayoutAction = OpenSideMenu | CloseSideMenu | ToggleSideMenu | SetHoveredNavItem | ToggleHoveredNavItem | HideNavSubMenu;

export const fromLayoutActions = {
  OpenSideMenu,
  CloseSideMenu,
  ToggleSideMenu,
  SetHoveredNavItem,
  ToggleHoveredNavItem,
  HideNavSubMenu
};
