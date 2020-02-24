import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StorageModule } from '@medium-stories/storage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'medium-stories' }),
    HttpClientModule,
    StorageModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
