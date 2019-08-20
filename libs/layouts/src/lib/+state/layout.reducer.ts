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
   * Hovered sub sub nav menu item
   */
  hoveredNavSubSubItem: number;

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
  hoveredNavSubSubItem: null,
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
      let menu: Partial<LayoutState> = {};
      if (action.payload.level === 2) {
        menu = {
          hoveredNavSubSubItem: action.payload.id
        };
      } else if (action.payload.level === 1) {
        menu = {
          hoveredNavSubItem: action.payload.id,
          hoveredNavSubSubItem: null
        };
      } else {
        menu = {
          hoveredNavItem: action.payload.id,
          hoveredNavSubItem: null,
          hoveredNavSubSubItem: null,
          showNavSubMenu: action.payload.showNavSubMenu
        };
      }
      state = {
        ...state,
        ...menu
      };
      break;
    }
    case LayoutActionTypes.ToggleHoveredNavItem: {
      let menu: Partial<LayoutState> = {};
      if (action.payload.level === 2) {
        menu = {
          hoveredNavSubSubItem: state.hoveredNavSubSubItem !== action.payload.id ? action.payload.id : null
        };
      } else if (action.payload.level === 1) {
        menu = {
          hoveredNavSubItem: state.hoveredNavSubItem !== action.payload.id ? action.payload.id : null,
          hoveredNavSubSubItem: null
        };
      } else {
        menu = {
          hoveredNavItem: state.hoveredNavItem !== action.payload.id ? action.payload.id : null,
          hoveredNavSubItem: null,
          hoveredNavSubSubItem: null,
          showNavSubMenu: action.payload.showNavSubMenu
        };
      }
      state = {
        ...state,
        ...menu
      };
      break;
    }
    case LayoutActionTypes.HideNavSubMenu: {
      state = {
        ...state,
        hoveredNavItem: null,
        hoveredNavSubItem: null,
        hoveredNavSubSubItem: null,
        showNavSubMenu: false
      };
      break;
    }
  }

  return state;
}
