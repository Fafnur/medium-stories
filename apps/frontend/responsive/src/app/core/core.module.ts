import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NxModule } from '@nrwl/angular';

import { ResponsiveModule } from '@medium-stories/responsive';
import { StorageModule } from '@medium-stories/storage';
import { RootStoreModule } from '@medium-stories/store';
import { TranslationModule } from '@medium-stories/translation';

import { environment } from '../../environments/environment';
import { coreContainers, coreRoutes } from './core.common';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StorageModule.forRoot(),
    TranslationModule.forRoot({
      config: environment.translation
    }),
    ResponsiveModule.forRoot(),
    RouterModule.forRoot(coreRoutes, { initialNavigation: 'enabled' }),
    RootStoreModule,
    TranslateModule
  ],
  declarations: [...coreContainers]
})
export class CoreModule {}
