import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { ServerStorageModule } from '@medium-stories/storage';

import { AppModule } from './app.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app/app.component';

@NgModule({
  imports: [AppModule, CoreModule, ServerStorageModule.forRoot(), ServerModule, ModuleMapLoaderModule, ServerTransferStateModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
