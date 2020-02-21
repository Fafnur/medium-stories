import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { translateHttpFactory, TRANSLATION_PREFIX, TRANSLATION_SUFFIX } from '@medium-stories/translation';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
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
export class AppBrowserModule {}
