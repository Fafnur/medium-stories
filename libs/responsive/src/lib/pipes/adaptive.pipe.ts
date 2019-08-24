import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponsiveFacade } from '../+state/responsive.facade';
import { AdaptiveMode } from '../interfaces/adaptive.interface';
import { ResponsiveMode } from '../interfaces/responsive.interface';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { RESPONSIVE_MODE } from '../responsive.tokens';

@Pipe({
  name: 'adaptive'
})
export class AdaptivePipe implements PipeTransform {
  constructor(
    private responsiveService: ResponsiveService,
    private responsiveFacade: ResponsiveFacade,
    @Inject(RESPONSIVE_MODE) protected responsiveMode: ResponsiveMode
  ) {}

  /**
   * Example use 'sm,md|hd,xh' | adaptive:'between' | async
   *
   * @param expression Adaptive Expression
   * @param mode Adaptive mode
   */
  transform(expression: string, mode?: AdaptiveMode | string): Observable<boolean> {
    if (typeof expression !== 'string') {
      return of(false);
    }

    if (!mode || typeof mode !== 'string') {
      mode = AdaptiveMode.Equal;
    }
    const expressions = expression.split('|');

    return this.responsiveFacade.responsiveType$.pipe(
      map<string, boolean>(type => {
        let result = false;
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

        return result;
      })
    );
  }
}
