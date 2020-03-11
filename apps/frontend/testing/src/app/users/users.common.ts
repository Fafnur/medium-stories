import { Routes } from '@angular/router';

import { UserBoxComponent } from './components/user-box/user-box.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserComponent } from './containers/user/user.component';

export const usersComponents: any[] = [UserBoxComponent, UserCardComponent];

export const usersContainers: any[] = [UserComponent];

export const usersRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];
