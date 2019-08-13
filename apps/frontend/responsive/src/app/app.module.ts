import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { APP_DIST } from '@medium-stories/common';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'medium-stories' }),
    HttpClientModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule
  ],
  providers: [
    {
      provide: APP_DIST, // need to get translation path on Universal
      useValue: 'frontend/translation'
    }
  ]
})
export class AppModule {}
