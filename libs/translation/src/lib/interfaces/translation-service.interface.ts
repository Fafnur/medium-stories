import { Observable } from 'rxjs';

/**
 * Translation service interface
 */
export abstract class TranslationService<T = any> {
  /**
   * Return current lang
   */
  abstract getLanguage(): T;

  /**
   * Get languages
   */
  abstract getLanguages(): T[];

  /**
   * Set selected language by code
   * @param language Language code
   */
  abstract setLanguage(language: string): Observable<string>;
}
