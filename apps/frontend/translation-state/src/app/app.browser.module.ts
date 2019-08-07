import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { BrowserStorageModule } from '@medium-stories/storage';
import { BrowserTranslationModule } from '@medium-stories/translation';

import { AppModule } from './app.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app/app.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    BrowserAnimationsModule,
    BrowserStorageModule.forRoot(),
    BrowserTranslationModule.forRoot({
      config: environment.translation
    }),
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
