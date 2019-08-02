import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './core/containers/app/app.component';
import { AppModule } from './app.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [AppModule, CoreModule, ServerModule, ModuleMapLoaderModule, ServerTransferStateModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
