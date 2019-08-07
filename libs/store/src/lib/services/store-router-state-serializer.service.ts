import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterStateUrl } from '../interfaces/router-state.interface';

@Injectable()
export class StoreRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  /**
   * Only return an object including the URL, params and query params instead of the entire snapshot
   * @param routerState Router state
   */
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
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
