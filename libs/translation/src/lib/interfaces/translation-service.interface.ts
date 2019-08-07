import { Observable } from 'rxjs';

import { TranslationConfig } from '@medium-stories/translation';

/**
 * Translation service interface
 */
export abstract class TranslationService<T = string> {
  /**
   * Return translation config
   */
  abstract getConfig(): TranslationConfig;

  /**
   * Return current lang
   */
  abstract getLanguage(): T;

  /**
   * Get languages
   */
  abstract getLanguages(): T[];

  /**
   * Init
   * @param config Translation config
   */
  abstract init(config: TranslationConfig): Observable<any>;

  /**
   * Set selected language by code
   * @param language Language code
   */
  abstract setLanguage(language: string): Observable<string>;
}
