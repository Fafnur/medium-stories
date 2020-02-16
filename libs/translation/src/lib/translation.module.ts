import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { TranslationEffects } from './+state/translation.effects';
import { TranslationFacade } from './+state/translation.facade';
import { TRANSLATION_FEATURE_KEY, translationReducer } from './+state/translation.reducer';
import { TranslationOptions } from './interfaces/translation-options.interface';
import { TRANSLATION_CONFIG, TranslationService } from './interfaces/translation-service.interface';
import { TranslationStorage } from './interfaces/translation-storage.interface';
import { TRANSLATION_PREFIX, TRANSLATION_SUFFIX } from './interfaces/translation.interface';
import { BaseTranslationStorage } from './services/base-translation-storage.service';
import { BaseTranslationService } from './services/base-translation.service';
import { TRANSLATION_CONFIG_DEFAULT, TRANSLATION_PREFIX_DEFAULT, TRANSLATION_SUFFIX_DEFAULT } from './translation.common';

@NgModule({
  imports: [
    TranslateModule,
    StoreModule.forFeature(TRANSLATION_FEATURE_KEY, translationReducer),
    EffectsModule.forFeature([TranslationEffects])
  ]
})
export class TranslationModule {
  static forRoot(options: Partial<TranslationOptions> = {}): ModuleWithProviders<TranslationModule> {
    return {
      ngModule: TranslationModule,
      providers: [
        TranslationFacade,
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
