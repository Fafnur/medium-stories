import { Routes } from '@angular/router';

import { NavLink } from '@medium-stories/layouts';

import { AppComponent } from './containers/app/app.component';

export const coreContainers: any[] = [AppComponent];

export const coreRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  }
];

export const coreNavLinks: NavLink[] = [
  {
    label: 'menu.models.title',
    route: '/',
    children: [
      {
        label: 'menu.models.urus',
        route: '/'
      },
      {
        label: 'menu.models.huracan',
        route: '/',
        children: [
          {
            label: 'menu.models.huracanEVO',
            route: '/'
          },
          {
            label: 'menu.models.huracanEVOSpyder',
            route: '/'
          },
          {
            label: 'menu.models.huracanRWD',
            route: '/'
          },
          {
            label: 'menu.models.huracanRWDSpyder',
            route: '/'
          },
          {
            label: 'menu.models.huracanPerformante',
            route: '/'
          },
          {
            label: 'menu.models.huracanPerformanteSpyder',
            route: '/'
          }
        ]
      },
      {
        label: 'menu.models.aventador',
        route: '/',
        children: [
          {
            label: 'menu.models.aventadorS',
            route: '/'
          },
          {
            label: 'menu.models.aventadorSRoadster',
            route: '/'
          },
          {
            label: 'menu.models.aventadorSVJ',
            route: '/'
          },
          {
            label: 'menu.models.aventadorSVJRoadster',
            route: '/'
          }
        ]
      }
    ]
  },
  {
    label: 'menu.brand',
    route: '/'
  },
  {
    label: 'menu.ownership',
    route: '/'
  },
  {
    label: 'menu.experience',
    route: '/'
  },
  {
    label: 'menu.motorsport',
    route: '/'
  },
  {
    label: 'menu.store',
    route: '/'
  }
];
