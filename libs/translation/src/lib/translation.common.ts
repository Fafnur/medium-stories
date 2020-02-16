import { TranslationConfig } from './interfaces/translation-service.interface';

export const TRANSLATION_LANG_DEFAULT = 'en';

export const TRANSLATION_PREFIX_DEFAULT = 'assets/i18n';
export const TRANSLATION_SUFFIX_DEFAULT = '.json';

export const TRANSLATION_CONFIG_DEFAULT: TranslationConfig = {
  language: TRANSLATION_LANG_DEFAULT,
  languages: [TRANSLATION_LANG_DEFAULT]
};
