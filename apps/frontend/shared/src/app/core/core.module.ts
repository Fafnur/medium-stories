import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NxModule } from '@nrwl/angular';

import { ResponsiveModule } from '@medium-stories/responsive';
import { StorageModule } from '@medium-stories/storage';
import { RootStoreModule } from '@medium-stories/store';

import { coreContainers, coreRoutes } from './core.common';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StorageModule.forRoot(),
    ResponsiveModule.forRoot(),
    RouterModule.forRoot(coreRoutes, { initialNavigation: 'enabled' }),
    RootStoreModule,
    TranslateModule
  ],
  declarations: [...coreContainers]
})
export class CoreModule {}
