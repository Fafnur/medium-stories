/**
 * Translation config
 */
export interface TranslationConfig<T = any> {
  /**
   * Default language
   */
  language: T;

  /**
   * Available language
   */
  languages: T[];
}
