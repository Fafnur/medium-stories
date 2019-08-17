import { LayoutAction, LayoutActionTypes } from './layout.actions';

export const LAYOUT_FEATURE_KEY = 'layout';

export interface LayoutState {
  /**
   * Is opened side menu
   */
  openedSideMenu: boolean;
}

export interface LayoutPartialState {
  readonly [LAYOUT_FEATURE_KEY]: LayoutState;
}

export const layoutInitialState: LayoutState = {
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
  }

  return state;
}
