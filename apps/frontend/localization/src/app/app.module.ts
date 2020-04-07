import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/angular';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AuthCoreModule } from '@medium-stories/auth';
import { StorageModule } from '@medium-stories/storage';
import { RootStoreModule } from '@medium-stories/store';
import { UsersCoreModule } from '@medium-stories/users';

import { environment } from '../environments/environment';
import { routes } from './app.common';
import { AppComponent } from './app.component';
import { LOCALIZE_CONFIG, LocalizationService } from './localization.service';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.graphql.uri }),
    cache: new InMemoryCache()
  };
}

export function getLocaleId(localizationService: LocalizationService) {
  return localizationService.getLocale();
}

export function localizationLoader(localizationService: LocalizationService) {
  return () => localizationService.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'medium-stories' }),
    HttpClientModule,
    NxModule.forRoot(),
    UsersCoreModule.forRoot(),
    AuthCoreModule.forRoot(),
    RootStoreModule,
    StorageModule.forRoot(),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    },
    {
      provide: LOCALIZE_CONFIG,
      useValue: environment.localize
    },
    {
      provide: LOCALE_ID,
      deps: [LocalizationService],
      useFactory: getLocaleId
    },
    LocalizationService,
    {
      provide: APP_INITIALIZER,
      useFactory: localizationLoader,
      deps: [LocalizationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [ApolloModule, HttpLinkModule]
})
export class AppModule {}
