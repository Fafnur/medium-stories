import { Pipe, PipeTransform } from '@angular/core';

import { AdaptiveMode } from '../interfaces/adaptive.interface';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';

@Pipe({
  name: 'adaptiveSync'
})
export class AdaptiveSyncPipe implements PipeTransform {
  constructor(private responsiveService: ResponsiveService, private responsiveStorage: ResponsiveStorage) {}

  /**
   * Example use 'sm,md|hd,xh' | adaptiveSync:'between'
   *
   * @param expression Adaptive Expression
   * @param mode Adaptive mode
   */
  transform(expression: string, mode?: AdaptiveMode | string): boolean {
    let result = false;

    if (typeof expression === 'string') {
      const type = this.getType();

      if (!mode || typeof mode !== 'string') {
        mode = AdaptiveMode.Equal;
      }
      const expressions = expression.split('|');

      switch (mode) {
        case AdaptiveMode.Min:
          result = this.responsiveService.checkMin(type, expressions);
          break;
        case AdaptiveMode.Max:
          result = this.responsiveService.checkMax(type, expressions);
          break;
        case AdaptiveMode.Between:
          result = this.responsiveService.checkBetween(type, expressions);
          break;
        case AdaptiveMode.Equal:
        default:
          result = this.responsiveService.checkEqual(type, expressions);
      }
    }

    return result;
  }

  /**
   * Return responsiveType from storage
   */
  private getType(): string {
    const props = this.responsiveStorage.getProperties();

    return props.responsiveType || this.responsiveService.getResponsiveTypeByWidth(props.width);
  }
}
