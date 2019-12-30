import { NavMenu } from '../../layout/interfaces/nav-menu.interface';
import { Breadcrumb } from '../interfaces/breadcrumb.interface';
import { LayoutAction, LayoutActionTypes } from './layout.actions';

export const LAYOUT_FEATURE_KEY = 'layout';

export interface LayoutState {
  /**
   * Nav menu
   */
  menu: NavMenu;

  /**
   * Is opened side bar
   */
  openedSidebar: boolean;

  /**
   * Is opened side bar
   */
  breadcrumbs: Breadcrumb[];
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
  openedSidebar: false,
  breadcrumbs: null
};

export function layoutReducer(state: LayoutState = layoutInitialState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case LayoutActionTypes.OpenSidebar: {
      state = {
        ...state,
        openedSidebar: true
      };
      break;
    }
    case LayoutActionTypes.CloseSidebar: {
      state = {
        ...state,
        openedSidebar: false,
        menu: { ...layoutInitialState.menu }
      };
      break;
    }
    case LayoutActionTypes.ToggleSidebar: {
      state = {
        ...state,
        openedSidebar: !state.openedSidebar
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
    case LayoutActionTypes.SetBreadcrumbs: {
      state = {
        ...state,
        breadcrumbs: action.payload
      };
      break;
    }
  }

  return state;
}
