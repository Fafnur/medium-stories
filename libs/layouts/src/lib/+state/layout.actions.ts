import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidebar = '[Layout] Open side menu',
  CloseSidebar = '[Layout] Close side menu',
  ToggleSidebar = '[Layout] Toggle side menu',

  SetHoveredNavItem = '[Layout] Set hovered nav item',
  ToggleHoveredNavItem = '[Layout] Toggle hovered nav item',
  HideNavSubMenu = '[Layout] Hide nav sub menu'
}

export class OpenSidebar implements Action {
  readonly type = LayoutActionTypes.OpenSidebar;
}

export class CloseSidebar implements Action {
  readonly type = LayoutActionTypes.CloseSidebar;
}

export class ToggleSidebar implements Action {
  readonly type = LayoutActionTypes.ToggleSidebar;
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

export type LayoutAction = OpenSidebar | CloseSidebar | ToggleSidebar | SetHoveredNavItem | ToggleHoveredNavItem | HideNavSubMenu;

export const fromLayoutActions = {
  OpenSidebar,
  CloseSidebar,
  ToggleSidebar,
  SetHoveredNavItem,
  ToggleHoveredNavItem,
  HideNavSubMenu
};
