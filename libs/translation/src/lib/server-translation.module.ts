import { ModuleWithProviders, NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { APP_DIST } from '@medium-stories/common';

import { TranslationOptions } from './interfaces/translation-options.interface';
import { TranslationService } from './interfaces/translation-service.interface';
import { TranslationStorage } from './interfaces/translation-storage.interface';
import { ServerTranslateLoader } from './loaders/server-translate.loader';
import { BaseTranslationService } from './services/base-translation.service';
import { BaseTranslationStorage } from './services/base-translation-storage.service';
import { TRANSLATION_CONFIG_DEFAULT, TRANSLATION_PREFIX_DEFAULT, TRANSLATION_SUFFIX_DEFAULT } from './translation.common';
import { TRANSLATION_CONFIG, TRANSLATION_PREFIX, TRANSLATION_SUFFIX } from './translation.tokens';
import { TranslationCommonModule } from './translation-common.module';

export function serverTranslateFactory(transferState: TransferState, appDist: string, prefix: string, suffix: string) {
  return new ServerTranslateLoader(transferState, appDist, prefix, suffix);
}

@NgModule({
  imports: [
    TranslationCommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: serverTranslateFactory,
        deps: [TransferState, APP_DIST, TRANSLATION_PREFIX, TRANSLATION_SUFFIX]
      }
    })
  ]
})
export class ServerTranslationModule {
  static forRoot(options: Partial<TranslationOptions> = {}): ModuleWithProviders<ServerTranslationModule> {
    return {
      ngModule: ServerTranslationModule,
      providers: [
        {
          provide: TRANSLATION_CONFIG,
          useValue: options.config || TRANSLATION_CONFIG_DEFAULT
        },
        {
          provide: TRANSLATION_PREFIX,
          useValue: options.prefix || TRANSLATION_PREFIX_DEFAULT
        },
        {
          provide: TRANSLATION_SUFFIX,
          useValue: options.suffix || TRANSLATION_SUFFIX_DEFAULT
        },
        {
          provide: TranslationService,
          useClass: options.service || BaseTranslationService
        },
        {
          provide: TranslationStorage,
          useClass: options.storage || BaseTranslationStorage
        }
      ]
    };
  }
}
