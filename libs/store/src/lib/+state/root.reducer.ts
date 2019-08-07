import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { RouterUrlState } from '../interfaces/router-url-state.interface';

/**
 * Root state for all application
 *
 * Notice: Import of modules that always should be in the root store.
 * Anthers modules will be loaded with lazy loading.
 */
export interface RootState {
  /**
   * Router state
   */
  router: RouterReducerState<RouterUrlState>;
}

/**
 * Our state is composed of a map of action customerReducer functions.
 * These customerReducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<RootState> = {
  router: routerReducer
};

export const rootInitialState: RootState = {
  router: null
};
