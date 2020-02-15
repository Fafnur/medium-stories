import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserTranslationModule } from '@medium-stories/translation';

import { environment } from '../environments/environment';
import { AppModule } from './app.module';
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    BrowserAnimationsModule,
    BrowserTranslationModule.forRoot({
      config: environment.translation
    })
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
