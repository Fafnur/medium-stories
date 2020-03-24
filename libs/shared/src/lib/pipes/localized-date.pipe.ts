import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Optional, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private localeId: string, @Optional() private translateService: TranslateService) {}

  transform(value: any, format?: string, timezone?: string, locale?: string): string {
    const lang = this.translateService ? this.translateService.currentLang : this.localeId;
    return new DatePipe(lang).transform(value, format, timezone, locale);
  }
}
