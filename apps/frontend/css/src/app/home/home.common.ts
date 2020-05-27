import { Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';

export const homeComponents: any[] = [];

export const homeContainers: any[] = [HomeComponent];

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
