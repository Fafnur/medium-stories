import { TranslationAction, TranslationActionTypes } from './translation.actions';

export const TRANSLATION_FEATURE_KEY = 'translation';

/**
 * Interface for the 'Translation' data used in
 *  - TranslationState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface TranslationState {
  list: Entity[]; // list of Translation; analogous to a sql normalized table
  selectedId?: string | number; // which Translation record has been selected
  loaded: boolean; // has the Translation list been loaded
  error?: any; // last none error (if any)
}

export interface TranslationPartialState {
  readonly [TRANSLATION_FEATURE_KEY]: TranslationState;
}

export const initialState: TranslationState = {
  list: [],
  loaded: false
};

export function reducer(state: TranslationState = initialState, action: TranslationAction): TranslationState {
  switch (action.type) {
    case TranslationActionTypes.TranslationLoaded: {
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
