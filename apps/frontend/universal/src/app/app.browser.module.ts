import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [AppModule, !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
