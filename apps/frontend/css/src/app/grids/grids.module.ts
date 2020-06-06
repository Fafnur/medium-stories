import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { gridsComponents, gridsContainers, gridsRoutes } from './grids.common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(gridsRoutes)],
  declarations: [...gridsComponents, ...gridsContainers],
})
export class GridsModule {}
