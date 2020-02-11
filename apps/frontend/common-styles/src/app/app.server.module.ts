import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { ServerStorageModule } from '@medium-stories/storage';
import { ServerTranslationModule } from '@medium-stories/translation';

import { environment } from '../environments/environment';
import { AppModule } from './app.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app/app.component';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    ServerStorageModule.forRoot(),
    ServerModule,
    ServerTranslationModule.forRoot({
      config: environment.translation
    }),
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
