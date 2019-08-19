import { LayoutAction, LayoutActionTypes } from './layout.actions';

export const LAYOUT_FEATURE_KEY = 'layout';

export interface LayoutState {
  /**
   * Hovered nav menu item
   */
  hoveredNavItem: number;

  /**
   * Hovered sub nav menu item
   */
  hoveredNavSubItem: number;

  /**
   * Is opened side menu
   */
  openedSideMenu: boolean;

  /**
   * Is show nav submenu
   */
  showNavSubMenu: boolean;
}

export interface LayoutPartialState {
  readonly [LAYOUT_FEATURE_KEY]: LayoutState;
}

export const layoutInitialState: LayoutState = {
  hoveredNavItem: null,
  hoveredNavSubItem: null,
  openedSideMenu: false,
  showNavSubMenu: false
};

export function layoutReducer(state: LayoutState = layoutInitialState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case LayoutActionTypes.OpenSideMenu: {
      state = {
        ...state,
        openedSideMenu: true
      };
      break;
    }
    case LayoutActionTypes.CloseSideMenu: {
      state = {
        ...state,
        openedSideMenu: false
      };
      break;
    }
    case LayoutActionTypes.ToggleSideMenu: {
      state = {
        ...state,
        openedSideMenu: !state.openedSideMenu
      };
      break;
    }
    case LayoutActionTypes.SetHoveredNavItem: {
      state = {
        ...state,
        hoveredNavItem: action.payload.id,
        hoveredNavSubItem: null,
        showNavSubMenu: action.payload.showNavSubMenu
      };
      break;
    }
    case LayoutActionTypes.SetHoveredNavSubItem: {
      state = {
        ...state,
        hoveredNavSubItem: action.payload
      };
      break;
    }
    case LayoutActionTypes.HideNavSubMenu: {
      state = {
        ...state,
        hoveredNavItem: null,
        hoveredNavSubItem: null,
        showNavSubMenu: false
      };
      break;
    }
  }

  return state;
}
