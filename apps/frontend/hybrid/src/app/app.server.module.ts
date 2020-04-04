import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { APP_DIST } from '@medium-stories/common';
import { TRANSLATION_PREFIX, TRANSLATION_SUFFIX, serverTranslateFactory } from '@medium-stories/translation';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: serverTranslateFactory,
        deps: [APP_DIST, TRANSLATION_PREFIX, TRANSLATION_SUFFIX]
      }
    }),
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_DIST,
      useValue: 'frontend/hybrid'
    }
  ]
})
export class AppServerModule {}
