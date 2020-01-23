import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string, mixed: boolean | string[] = false, ignore?: string): string {
    let transformed = value || '';
    if (mixed) {
      if (Array.isArray(mixed)) {
        transformed = this.toCamelCaseMix(value, mixed);
      } else {
        transformed = this.toCamelCaseMix(value);
      }
    } else {
      transformed = this.toCamelCase(value, ' ');
    }

    return transformed;
  }

  /**
   * Transform string to camel case
   * @param str String
   * @param separator Separator
   */
  toCamelCase(str: string, separator: string = '_') {
    return str
      .split(separator)
      .map((word, index) => {
        // If it is the first word make sure to lowercase all the chars.
        if (index === 0) {
          let ind = word.lastIndexOf('.');
          if (ind >= 0) {
            ind++;
          } else {
            ind = 0;
          }
          const prefix = ind && ind > 0 ? word.slice(0, ind) : '';

          return `${prefix}${word.charAt(ind).toLowerCase()}${word.slice(ind + 1)}`;
        }
        // If it is not the first word only upper case the first char and lowercase the rest.
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }

  /**
   * Transform string to camel case mix
   * @param str String
   * @param separators Separators
   */
  toCamelCaseMix(str: string, separators: string[] = ['_', '-', ' ']) {
    let transformed = str;
    separators.forEach(separator => {
      transformed = this.toCamelCase(transformed, separator);
    });

    return transformed;
  }
}
