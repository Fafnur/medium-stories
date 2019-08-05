import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { coreContainers, coreRoutes } from './core.common';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(coreRoutes, { initialNavigation: 'enabled' })],
  declarations: [...coreContainers]
})
export class CoreModule {}
