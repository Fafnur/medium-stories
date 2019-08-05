import { InjectionToken } from '@angular/core';

import { TranslationConfig } from './interfaces/translation-config.interface';

export const TRANSLATION_CONFIG = new InjectionToken<TranslationConfig>('TranslationConfig');

export const TRANSLATION_PREFIX = new InjectionToken<string>('TranslationPrefix');
export const TRANSLATION_SUFFIX = new InjectionToken<string>('TranslationSuffix');
