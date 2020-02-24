import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { RootStoreModule } from '@medium-stories/store';

import { routes } from './app.common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'medium-stories' }),
    HttpClientModule,
    RootStoreModule,
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
