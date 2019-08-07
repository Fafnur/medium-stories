import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterUrlState } from '../interfaces/router-url-state.interface';

/**
 * Custom RouterStateSerializer
 * @see https://ngrx.io/guide/router-store/configuration
 */
@Injectable()
export class StoreRouterStateSerializer implements RouterStateSerializer<RouterUrlState> {
  /**
   * Only return an object including the URL, params and query params instead of the entire snapshot
   * @param routerState Router state
   */
  serialize(routerState: RouterStateSnapshot): RouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}
