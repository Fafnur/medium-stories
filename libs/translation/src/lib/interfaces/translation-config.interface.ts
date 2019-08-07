/**
 * Translation config
 */
export interface TranslationConfig<T = string> {
  /**
   * Selected language
   */
  currentLanguage?: T;

  /**
   * Default language
   */
  language: T;

  /**
   * Available language
   */
  languages: T[];
}
