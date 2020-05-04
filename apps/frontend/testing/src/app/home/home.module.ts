import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { homeComponents, homeContainers, homeProviders, homeRoutes } from './home.common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), TranslateModule],
  declarations: [...homeComponents, ...homeContainers],
  providers: [...homeProviders]
})
export class HomeModule {}
