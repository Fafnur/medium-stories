import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSideMenu = '[Layout] Open side menu',
  CloseSideMenu = '[Layout] Close side menu',
  ToggleSideMenu = '[Layout] Toggle side menu'
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

export type LayoutAction = OpenSideMenu | CloseSideMenu | ToggleSideMenu;

export const fromLayoutActions = {
  OpenSideMenu,
  CloseSideMenu,
  ToggleSideMenu
};
