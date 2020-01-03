import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: any, format?: string, timezone?: string, locale?: string): string {
    return new DatePipe(this.translateService.currentLang).transform(value, format, timezone, locale);
  }
}
