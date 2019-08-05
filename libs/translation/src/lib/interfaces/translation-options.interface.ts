import { Type } from '@angular/core';

import { TranslationConfig } from './translation-config.interface';
import { TranslationService } from './translation-service.interface';
import { TranslationStorage } from './translation-storage.interface';

/**
 * Translation module options
 */
export interface TranslationOptions {
  /**
   * Translation config (languages)
   */
  config: TranslationConfig;

  /**
   * Translation prefix (i18n folder)
   */
  prefix: string;

  /**
   * Translation service
   */
  service: Type<TranslationService>;

  /**
   * Translation storage
   */
  storage: Type<TranslationStorage>;

  /**
   * Translation prefix (file extension)
   */
  suffix: string;
}
