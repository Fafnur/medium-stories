import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSideMenu = '[Layout] Open side menu',
  CloseSideMenu = '[Layout] Close side menu',
  ToggleSideMenu = '[Layout] Toggle side menu',

  SetHoveredNavItem = '[Layout] Set hovered nav item',
  SetHoveredNavSubItem = '[Layout] Set hovered nav sub item',
  SetHoveredNavSubSubItem = '[Layout] Set hovered nav sub sub item',
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
  id: number;

  showNavSubMenu: boolean;
}

export class SetHoveredNavItem implements Action {
  readonly type = LayoutActionTypes.SetHoveredNavItem;

  constructor(public payload: HoveredNavItemPayload) {}
}

export class SetHoveredNavSubItem implements Action {
  readonly type = LayoutActionTypes.SetHoveredNavSubItem;

  constructor(public payload: number) {}
}

export class SetHoveredNavSubSubItem implements Action {
  readonly type = LayoutActionTypes.SetHoveredNavSubSubItem;

  constructor(public payload: number) {}
}

export class HideNavSubMenu implements Action {
  readonly type = LayoutActionTypes.HideNavSubMenu;
}

export type LayoutAction =
  | OpenSideMenu
  | CloseSideMenu
  | ToggleSideMenu
  | SetHoveredNavItem
  | SetHoveredNavSubItem
  | SetHoveredNavSubSubItem
  | HideNavSubMenu;

export const fromLayoutActions = {
  OpenSideMenu,
  CloseSideMenu,
  ToggleSideMenu,
  SetHoveredNavItem,
  SetHoveredNavSubItem,
  SetHoveredNavSubSubItem,
  HideNavSubMenu
};
