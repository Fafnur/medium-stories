import { Injectable } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { DataPersistence } from '@nrwl/angular';

import { RESPONSIVE_FEATURE_KEY, ResponsiveActionTypes, ResponsiveState, SetWindowProps } from '@medium-stories/responsive';
import { AbstractEffects, RootState } from '@medium-stories/store';

import { Breadcrumb } from '../interfaces/breadcrumb.interface';
import { CloseSidebar, SetBreadcrumbs } from './layout.actions';
import { LAYOUT_FEATURE_KEY, LayoutPartialState, LayoutState } from './layout.reducer';

@Injectable()
export class LayoutEffects extends AbstractEffects<LayoutState> {
  @Effect() switched$ = this.dataPersistence.fetch(ResponsiveActionTypes.SetWindowProps, {
    run: (action: SetWindowProps, store: LayoutPartialState) => {
      const responsiveState = this.getState<ResponsiveState>(store, RESPONSIVE_FEATURE_KEY);
      if (responsiveState.switched) {
        return new CloseSidebar();
      }
    },
    onError: (action: SetWindowProps, error) => console.error(error.toString())
  });

  @Effect() navigated$ = this.dataPersistence.fetch(ROUTER_NAVIGATED, {
    run: (action: any, store: LayoutPartialState & RootState) => {
      return new SetBreadcrumbs([{ label: 'breadcrumbs.home', params: {}, url: '/' }, ...this.getBreadcrumbs(this.activatedRoute)]);
    },
    onError: (action: any, error) => console.error(error.toString())
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LayoutPartialState>,
    private activatedRoute: ActivatedRoute
  ) {
    super(LAYOUT_FEATURE_KEY);
  }

  /**
   * Returns array of IBreadcrumb objects that represent the breadcrumb
   */
  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    // return if there are no more children
    if (route.children.length === 0) {
      return breadcrumbs;
    }

    for (const child of route.children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!('breadcrumb' in child.snapshot.data)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const routeURL = child.snapshot.url.map(segment => segment.path).join('/');

      if (routeURL && routeURL.length && child.snapshot.data['breadcrumb']) {
        url += `/${routeURL}`;

        const breadcrumbData = child.snapshot.data['breadcrumb'];
        const breadcrumbConfig = { url: '', label: '' };
        if (typeof breadcrumbData === 'boolean') {
          breadcrumbConfig.label = routeURL;
          breadcrumbConfig.url = url;
        } else if (typeof breadcrumbData === 'string') {
          breadcrumbConfig.label = breadcrumbData;
          breadcrumbConfig.url = url;
        } else if (breadcrumbData && typeof breadcrumbData === 'object') {
          breadcrumbConfig.label = breadcrumbData.label;
          breadcrumbConfig.url = breadcrumbData.url || url;
        }
        // add breadcrumb
        const breadcrumb: Breadcrumb = {
          ...breadcrumbConfig,
          params: child.snapshot.params
        };
        breadcrumbs.push(breadcrumb);
      }

      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
