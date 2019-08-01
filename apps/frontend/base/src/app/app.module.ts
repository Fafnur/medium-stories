import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'medium-stories' }),
    HttpClientModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserTransferStateModule
  ],
  declarations: [AppComponent]
})
export class AppModule {}
