import { ResponsiveAction, ResponsiveActionTypes } from './responsive.actions';

export const RESPONSIVE_FEATURE_KEY = 'responsive';

/**
 * Interface for the 'Responsive' data used in
 *  - ResponsiveState, and the responsiveReducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ResponsiveState {
  list: Entity[]; // list of Responsive; analogous to a sql normalized table
  selectedId?: string | number; // which Responsive record has been selected
  loaded: boolean; // has the Responsive list been loaded
  error?: any; // last none error (if any)
}

export interface ResponsivePartialState {
  readonly [RESPONSIVE_FEATURE_KEY]: ResponsiveState;
}

export const initialState: ResponsiveState = {
  list: [],
  loaded: false
};

export function responsiveReducer(state: ResponsiveState = initialState, action: ResponsiveAction): ResponsiveState {
  switch (action.type) {
    case ResponsiveActionTypes.ResponsiveLoaded: {
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
