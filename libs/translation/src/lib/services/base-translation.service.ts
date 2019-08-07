import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TranslationService } from '../interfaces/translation-service.interface';
import { TranslationConfig } from '../interfaces/translation-config.interface';
import { TranslationStorage } from '../interfaces/translation-storage.interface';
import { TRANSLATION_LANG_DEFAULT } from '../translation.common';
import { TRANSLATION_CONFIG } from '../translation.tokens';

@Injectable()
export class BaseTranslationService implements TranslationService {
  constructor(
    private translateService: TranslateService,
    private translationStorage: TranslationStorage,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(TRANSLATION_CONFIG) private translationConfig: TranslationConfig
  ) {}

  init(config: TranslationConfig): Observable<any> {
    this.translateService.addLangs(config.languages);
    this.translateService.setDefaultLang(config.language);
    this.translationStorage.setLanguage(config.currentLanguage);

    return this.translateService.use(config.currentLanguage);
  }

  getConfig(): TranslationConfig {
    const languages = this.translationConfig.languages || [TRANSLATION_LANG_DEFAULT];
    let language = this.translationConfig.language || null;
    if (!language) {
      // If browser, select locale from browser
      if (isPlatformBrowser(this.platformId)) {
        language = window.navigator.language.split('-').shift();
      }
      if (!language) {
        language = languages[0];
      }
    }
    const currentLanguage = this.translationStorage.getLanguage() || language;

    return {
      languages,
      language,
      currentLanguage
    };
  }

  getLanguage(): string {
    return this.translateService.currentLang;
  }

  getLanguages(): string[] {
    return this.translateService.getLangs();
  }

  setLanguage(language: string): Observable<string> {
    this.translationStorage.setLanguage(language);

    return this.translateService.use(language);
  }
}
