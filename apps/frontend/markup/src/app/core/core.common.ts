import { Routes } from '@angular/router';

import { AppComponent } from './containers/app/app.component';

export const coreContainers: any[] = [AppComponent];

export const coreRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  }
];
