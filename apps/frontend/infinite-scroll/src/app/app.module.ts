import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/angular';

import { SharedModule } from '@medium-stories/shared';
import { StorageModule } from '@medium-stories/storage';
import { RootStoreModule } from '@medium-stories/store';
import { TranslationModule } from '@medium-stories/translation';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'medium-stories' }),
    NxModule.forRoot(),
    HttpClientModule,
    StorageModule.forRoot(),
    SharedModule,
    RootStoreModule,
    TranslationModule.forRoot({
      config: environment.translation,
      prefix: 'assets/locale'
    }),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
