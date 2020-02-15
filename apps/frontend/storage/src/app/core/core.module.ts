import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageModule } from '@medium-stories/storage';

import { coreContainers, coreRoutes } from './core.common';

@NgModule({
  imports: [CommonModule, StorageModule.forRoot(), RouterModule.forRoot(coreRoutes, { initialNavigation: 'enabled' })],
  declarations: [...coreContainers]
})
export class CoreModule {}
