import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageLabel'
})
export class LanguageLabelPipe implements PipeTransform {
  static prefix = 'languages.full.';

  transform(language: any, prefix: string = LanguageLabelPipe.prefix, ...args: any[]): string {
    return `${prefix}${language}`;
  }
}
