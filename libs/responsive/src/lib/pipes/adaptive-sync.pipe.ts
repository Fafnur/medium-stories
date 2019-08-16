import { Inject, Pipe, PipeTransform } from '@angular/core';

import { AdaptiveMode } from '../interfaces/adaptive.interface';
import { ResponsiveMode } from '../interfaces/responsive.interface';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';
import { RESPONSIVE_MODE } from '../responsive.tokens';

@Pipe({
  name: 'adaptiveSync',
  pure: false
})
export class AdaptiveSyncPipe implements PipeTransform {
  constructor(
    private responsiveService: ResponsiveService,
    private responsiveStorage: ResponsiveStorage,
    @Inject(RESPONSIVE_MODE) protected responsiveMode: ResponsiveMode
  ) {}

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

      if (expression === 'mobile') {
        expression = this.responsiveMode.mobile;
      }

      if (!mode || typeof mode !== 'string') {
        mode = AdaptiveMode.Equal;
      }
      const expressions = expression.split('|');

      switch (mode) {
        case AdaptiveMode.Mobile:
          result = type === this.responsiveMode.mobile;
          break;
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
