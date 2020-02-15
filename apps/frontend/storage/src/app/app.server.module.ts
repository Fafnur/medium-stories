import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [AppModule, CoreModule, ServerModule, ServerTransferStateModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
