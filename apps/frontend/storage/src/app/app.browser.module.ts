import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModule } from './app.module';
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [AppModule, CoreModule, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
