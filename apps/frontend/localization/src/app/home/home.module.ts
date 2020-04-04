import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { homeContainers, homeRoutes } from './home.common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
  declarations: [...homeContainers]
})
export class HomeModule {}
