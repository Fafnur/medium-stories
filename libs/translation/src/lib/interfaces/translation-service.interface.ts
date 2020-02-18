import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

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

/**
 * Translation config token
 */
export const TRANSLATION_CONFIG = new InjectionToken<TranslationConfig>('TranslationConfig');

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
  abstract init(config?: TranslationConfig): Observable<any>;

  /**
   * Set selected language by code
   * @param language Language code
   */
  abstract setLanguage(language: string): Observable<string>;
}
