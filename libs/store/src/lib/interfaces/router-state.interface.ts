import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

/**
 * Router state URL
 */
export interface RouterStateUrl {
  /**
   * URL
   */
  url: string;

  /**
   * Route params
   */
  params: Params;

  /**
   * Route query params
   */
  queryParams: Params;
}

/**
 * Router state
 */
export interface RouterState {
  /**
   * Router reducer state
   */
  router: RouterReducerState<RouterStateUrl>;
}
