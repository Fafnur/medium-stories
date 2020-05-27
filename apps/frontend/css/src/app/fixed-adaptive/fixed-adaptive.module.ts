import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { fixedAdaptiveComponents, fixedAdaptiveContainers, fixedAdaptiveRoutes } from './fixed-adaptive.common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(fixedAdaptiveRoutes)],
  declarations: [...fixedAdaptiveComponents, ...fixedAdaptiveContainers]
})
export class FixedAdaptiveModule {}
