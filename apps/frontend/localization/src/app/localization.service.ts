import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeRu from '@angular/common/locales/ru';
import { Inject, Injectable, InjectionToken } from '@angular/core';

import { CookieService } from '@medium-stories/storage';

/**
 * Localize config
 */
export interface LocalizeConfig {
  /**
   * Default language
   */
  language?: string;

  /**
   * Available language
   */
  languages: string[];
}

/**
 * Localize config token
 */
export const LOCALIZE_CONFIG = new InjectionToken<LocalizeConfig>('LocalizeConfig');

@Injectable()
export class LocalizationService {
  constructor(private cookieService: CookieService, @Inject(LOCALIZE_CONFIG) private localizeConfig: LocalizeConfig) {}

  init(): void {
    this.registerLocale(this.getLocale());
  }

  setLocale(locale: string): void {
    this.cookieService.put('lang', locale, { path: '/' });
    this.registerLocale(locale);
  }

  getLocale(): string {
    let locale = this.cookieService.get('lang');

    if (!locale) {
      locale = this.localizeConfig.language;
    }

    return locale;
  }

  /**
   * Register locale data since only the en-US locale data comes with Angular
   * @param locale LocaleId
   */
  registerLocale(locale: string): void {
    switch (locale) {
      case 'en-US': {
        registerLocaleData(localeEn);
        break;
      }
      case 'ru': {
        registerLocaleData(localeRu);
        break;
      }
    }
  }
}
