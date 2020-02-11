import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [CommonModule, MatCardModule, RouterModule.forChild(homeRoutes), TranslateModule],
  declarations: [...homeContainers]
})
export class HomeModule {}
