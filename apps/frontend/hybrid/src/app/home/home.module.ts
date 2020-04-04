import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), TranslateModule],
  declarations: [...homeContainers]
})
export class HomeModule {}
