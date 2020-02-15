import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { ServerTranslationModule } from '@medium-stories/translation';

import { environment } from '../environments/environment';
import { AppModule } from './app.module';
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    ServerModule,
    ServerTranslationModule.forRoot({
      config: environment.translation
    }),
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
