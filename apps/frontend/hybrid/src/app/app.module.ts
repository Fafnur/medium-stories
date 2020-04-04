import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeRu from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
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
import { TranslationModule } from '@medium-stories/translation';
import { UsersCoreModule } from '@medium-stories/users';

import { environment } from '../environments/environment';
import { routes } from './app.common';
import { AppComponent } from './app.component';

registerLocaleData(localeRu);

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.graphql.uri }),
    cache: new InMemoryCache()
  };
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
    TranslationModule.forRoot({
      config: environment.translation
    }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent],
  exports: [ApolloModule, HttpLinkModule]
})
export class AppModule {}
