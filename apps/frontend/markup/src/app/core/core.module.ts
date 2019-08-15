import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NxModule } from '@nrwl/angular';

import { ResponsiveModule } from '@medium-stories/responsive';
import { RootStoreModule } from '@medium-stories/store';

import { coreContainers, coreRoutes } from './core.common';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    ResponsiveModule.forRoot(),
    RouterModule.forRoot(coreRoutes, { initialNavigation: 'enabled' }),
    RootStoreModule,
    TranslateModule
  ],
  declarations: [...coreContainers]
})
export class CoreModule {}
