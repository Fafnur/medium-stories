import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { APP_DIST } from '@medium-stories/common';
import { serverTranslateFactory, TRANSLATION_PREFIX, TRANSLATION_SUFFIX } from '@medium-stories/translation';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

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
  providers: [
    {
      provide: APP_DIST, // need to get translation path on Universal
      useValue: 'frontend/redux'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
