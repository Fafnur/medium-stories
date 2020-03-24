import { Inject, LOCALE_ID, Optional, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Locale } from '@medium-stories/entities';

@Pipe({
  name: 'localize',
  pure: false
})
export class LocalizePipe implements PipeTransform {
  static prefix = 'languages.full.';

  constructor(@Inject(LOCALE_ID) private localeId: string, @Optional() private translateService: TranslateService) {}

  transform(locale: Locale, lang?: string): string {
    let translate = '';
    if (!lang) {
      lang = this.translateService ? this.translateService.currentLang : this.localeId;
    }
    if (lang in locale) {
      translate = locale[lang];
    } else {
      console.warn(`Translation didn't find for locale: ${lang}, field: ${locale}. Selected first`);
      const keys = Object.keys(locale);
      if (keys && keys.length) {
        translate = locale[keys[0]];
      }
    }

    return translate;
  }
}
