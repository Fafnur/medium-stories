import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
