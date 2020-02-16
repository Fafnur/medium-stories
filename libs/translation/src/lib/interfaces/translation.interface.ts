import { InjectionToken } from '@angular/core';

/**
 * Translate loader prefix token
 */
export const TRANSLATION_PREFIX = new InjectionToken<string>('TranslationPrefix');

/**
 * Translate loader suffix token
 */
export const TRANSLATION_SUFFIX = new InjectionToken<string>('TranslationSuffix');
