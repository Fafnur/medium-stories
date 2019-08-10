import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutsModule } from '@medium-stories/layouts';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), LayoutsModule, TranslateModule],
  declarations: [...homeContainers]
})
export class HomeModule {}
