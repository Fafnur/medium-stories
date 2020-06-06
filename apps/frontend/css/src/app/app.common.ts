import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'fixed-adaptive',
    loadChildren: () => import('./fixed-adaptive/fixed-adaptive.module').then((m) => m.FixedAdaptiveModule),
  },
  {
    path: 'grids',
    loadChildren: () => import('./grids/grids.module').then((m) => m.GridsModule),
  },
];
