import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeEn from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageModule } from '@medium-stories/storage';
import { TranslateModule } from '@ngx-translate/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NxModule } from '@nrwl/angular';

import { API_SOURCES, APP_DIST } from '@medium-stories/common';
import { FOOTER_GROUPS_LINKS, FOOTER_NAV_LINKS, LayoutsCoreModule, NAV_LINKS } from '@medium-stories/layouts';
import { RESPONSIVE_SIZE_DEFAULT, ResponsiveModule } from '@medium-stories/responsive';
import { RootStoreModule } from '@medium-stories/store';

import { environment } from '../../environments/environment';
import { coreContainers, coreFooterGroupsLinks, coreFooterNavLinks, coreNavLinks, coreRoutes } from './core.common';

registerLocaleData(localeRu);
registerLocaleData(localeEn);

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.graphql.uri }),
    cache: new InMemoryCache()
  };
}

@NgModule({
  imports: [
    NxModule.forRoot(),
    LayoutsCoreModule,
    StorageModule.forRoot(),
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
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    },
    {
      provide: APP_DIST,
      useValue: 'frontend/graphql'
    },
    {
      provide: API_SOURCES, // need to set path's for sources
      useValue: environment.api.sources
    }
  ],
  exports: [ApolloModule, HttpLinkModule]
})
export class CoreModule {}
