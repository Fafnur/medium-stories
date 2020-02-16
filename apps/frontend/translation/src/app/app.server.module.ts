import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { APP_DIST } from '@medium-stories/common';
import { serverTranslateFactory, TRANSLATION_PREFIX, TRANSLATION_SUFFIX } from '@medium-stories/translation';

import { AppModule } from './app.module';
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    AppModule,
    CoreModule,
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
      useValue: 'frontend/translation'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
