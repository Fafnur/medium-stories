import { LayoutAction, LayoutActionTypes } from './layout.actions';

export const LAYOUT_FEATURE_KEY = 'layout';

/**
 * Interface for the 'Layout' data used in
 *  - LayoutState, and the layoutReducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface LayoutState {
  list: Entity[]; // list of Layout; analogous to a sql normalized table
  selectedId?: string | number; // which Layout record has been selected
  loaded: boolean; // has the Layout list been loaded
  error?: any; // last none error (if any)
}

export interface LayoutPartialState {
  readonly [LAYOUT_FEATURE_KEY]: LayoutState;
}

export const layoutInitialState: LayoutState = {
  list: [],
  loaded: false
};

export function layoutReducer(state: LayoutState = layoutInitialState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case LayoutActionTypes.LayoutLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
