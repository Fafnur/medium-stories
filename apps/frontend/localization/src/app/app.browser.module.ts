import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    BrowserAnimationsModule,
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
