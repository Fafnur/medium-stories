import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { translateHttpFactory, TRANSLATION_PREFIX, TRANSLATION_SUFFIX, TranslationModule } from '@medium-stories/translation';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { environment } from '../environments/environment';
import { AppModule } from './app.module';
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpFactory,
        deps: [HttpClient, TRANSLATION_PREFIX, TRANSLATION_SUFFIX]
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
  constructor() {
    window['viewportUnitsBuggyfill'].init();
  }
}
