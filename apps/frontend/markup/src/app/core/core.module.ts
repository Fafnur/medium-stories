import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NxModule } from '@nrwl/angular';

import { NAV_LINKS } from '@medium-stories/layouts';
import { RESPONSIVE_SIZE_DEFAULT, ResponsiveModule } from '@medium-stories/responsive';
import { RootStoreModule } from '@medium-stories/store';

import { coreContainers, coreNavLinks, coreRoutes } from './core.common';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    ResponsiveModule.forRoot({
      mode: {
        mobile: 'lg',
        sizes: RESPONSIVE_SIZE_DEFAULT
      }
    }),
    RouterModule.forRoot(coreRoutes, { initialNavigation: 'enabled' }),
    RootStoreModule,
    TranslateModule
  ],
  declarations: [...coreContainers],
  providers: [
    {
      provide: NAV_LINKS,
      useValue: coreNavLinks
    }
  ]
})
export class CoreModule {}
