import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserStorageModule } from '@medium-stories/storage';

import { AppModule } from './app.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app/app.component';

@NgModule({
  imports: [AppModule, CoreModule, BrowserAnimationsModule, BrowserStorageModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
