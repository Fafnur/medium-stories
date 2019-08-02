import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'medium-stories' }), HttpClientModule, BrowserTransferStateModule]
})
export class AppModule {}
