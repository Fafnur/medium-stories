import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NxModule } from '@nrwl/angular';

import { FOOTER_GROUPS_LINKS, FOOTER_NAV_LINKS, NAV_LINKS } from '@medium-stories/layouts';
import { RESPONSIVE_SIZE_DEFAULT, ResponsiveModule } from '@medium-stories/responsive';
import { StorageModule } from '@medium-stories/storage';
import { RootStoreModule } from '@medium-stories/store';
import { TranslationModule } from '@medium-stories/translation';
import { environment } from '../../environments/environment';

import { coreContainers, coreFooterGroupsLinks, coreFooterNavLinks, coreNavLinks, coreRoutes } from './core.common';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StorageModule.forRoot(),
    TranslationModule.forRoot({
      config: environment.translation
    }),
    ResponsiveModule.forRoot({
      mode: {
        mobile: 'lg',
        sizes: RESPONSIVE_SIZE_DEFAULT
      }
    }),
    RouterModule.forRoot(coreRoutes, { initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' }),
    RootStoreModule,
    TranslateModule
  ],
  declarations: [...coreContainers],
  providers: [
    {
      provide: NAV_LINKS,
      useValue: coreNavLinks
    },
    {
      provide: FOOTER_NAV_LINKS,
      useValue: coreFooterNavLinks
    },
    {
      provide: FOOTER_GROUPS_LINKS,
      useValue: coreFooterGroupsLinks
    }
  ]
})
export class CoreModule {}
