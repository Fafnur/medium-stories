import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'medium-stories' }), RouterModule.forRoot([], { initialNavigation: 'enabled' })],
  bootstrap: [AppComponent]
})
export class AppModule {}
