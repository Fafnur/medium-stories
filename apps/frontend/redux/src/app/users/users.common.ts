import { Routes } from '@angular/router';

import { UserComponent } from './containers/user/user.component';

export const usersContainers: any[] = [UserComponent];

export const usersRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];
