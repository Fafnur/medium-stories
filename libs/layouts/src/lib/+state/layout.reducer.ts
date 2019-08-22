import { NavMenu } from '../interfaces/nav-menu.interface';
import { LayoutAction, LayoutActionTypes } from './layout.actions';

export const LAYOUT_FEATURE_KEY = 'layout';

export interface LayoutState {
  /**
   * Nav menu
   */
  menu: NavMenu;

  /**
   * Is opened side menu
   */
  openedSideMenu: boolean;
}

export interface LayoutPartialState {
  readonly [LAYOUT_FEATURE_KEY]: LayoutState;
}

export const layoutInitialState: LayoutState = {
  menu: {
    hovered: [null, null, null, null, null],
    active: { id: 'nav', index: null, level: null },
    previous: { id: 'nav', index: null, level: null, hovered: [null, null, null, null, null] },
    showedSubmenu: false,
    subLevels: 5
  },
  openedSideMenu: false
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
        openedSideMenu: false,
        menu: { ...layoutInitialState.menu }
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
      const menu = { ...state.menu };
      if (action.payload.level < menu.subLevels) {
        menu.previous = { ...menu.active, hovered: [...menu.hovered] };
        menu.active = { id: action.payload.id, index: action.payload.index, level: action.payload.level };
        menu.hovered = [...menu.hovered];
        menu.hovered[action.payload.level] = action.payload.index;
        for (let key = action.payload.level + 1; key < menu.subLevels; key++) {
          menu.hovered[key] = null;
        }
      }
      if (typeof action.payload.showedSubmenu === 'boolean') {
        menu.showedSubmenu = !!action.payload.showedSubmenu;
      }

      state = {
        ...state,
        menu
      };
      break;
    }
    case LayoutActionTypes.ToggleHoveredNavItem: {
      const menu = { ...state.menu };
      menu.hovered = [...menu.hovered];
      if (action.payload.level < menu.subLevels) {
        menu.previous = { ...menu.active, hovered: [...menu.hovered] };
        const isHovered = menu.hovered[action.payload.level] !== action.payload.index ? action.payload.index : null;
        menu.active = { id: action.payload.id, index: action.payload.index, level: action.payload.level, isHovered: isHovered !== null };
        menu.hovered[action.payload.level] = isHovered;
        for (let key = action.payload.level + 1; key < state.menu.subLevels; key++) {
          menu.hovered[key] = null;
        }
      }
      if (typeof action.payload.showedSubmenu === 'boolean') {
        menu.showedSubmenu = action.payload.showedSubmenu;
      }

      state = {
        ...state,
        menu
      };
      break;
    }
    case LayoutActionTypes.HideNavSubMenu: {
      state = {
        ...state,
        menu: { ...layoutInitialState.menu }
      };
      break;
    }
  }

  return state;
}
