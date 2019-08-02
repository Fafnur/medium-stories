import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
