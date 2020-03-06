import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AuthSharedModule } from '@medium-stories/auth';
import { UsersSharedModule } from '@medium-stories/users';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), AuthSharedModule, UsersSharedModule, TranslateModule],
  declarations: [...homeContainers]
})
export class HomeModule {}
