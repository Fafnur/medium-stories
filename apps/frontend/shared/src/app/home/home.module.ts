import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ResponsiveModule } from '@medium-stories/responsive';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [CommonModule, MatCardModule, ResponsiveModule, RouterModule.forChild(homeRoutes), TranslateModule],
  declarations: [...homeContainers]
})
export class HomeModule {}
