import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { EventsCoreModule } from '@medium-stories/events';
import { UsersCoreModule } from '@medium-stories/users';

import { usersComponents, usersContainers, usersRoutes } from './users.common';

@NgModule({
  imports: [CommonModule, UsersCoreModule.forRoot(), EventsCoreModule.forRoot(), RouterModule.forChild(usersRoutes), TranslateModule],
  declarations: [...usersComponents, ...usersContainers]
})
export class UsersModule {}
