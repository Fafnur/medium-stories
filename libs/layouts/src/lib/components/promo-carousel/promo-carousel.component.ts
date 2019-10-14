import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PromoCarouselOptions } from '../../interfaces/promo-carousel.interface';

const OPTIONS_DEFAULT: PromoCarouselOptions = {
  slides: [],
  active: 0,
  hide: null,
  interval: 4000
};

@Component({
  selector: 'medium-stories-promo-carousel',
  templateUrl: './promo-carousel.component.html',
  styleUrls: ['./promo-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoCarouselComponent {
  /**
   * Promo carousel options
   */
  options: PromoCarouselOptions | null = null;

  /**
   * Watch
   */
  watch$!: Observable<number>;

  @Input() set config(options: Partial<PromoCarouselOptions>) {
    this.options = { ...OPTIONS_DEFAULT, ...options };
    if (isPlatformBrowser(this.platformId)) {
      this.watch$ = interval(this.options.interval).pipe(
        tap(() => {
          if (!window.document.hidden) {
            if (this.options.active + 1 === this.options.slides.length) {
              this.options.hide = this.options.slides.length - 1;
              this.options.active = 0;
            } else {
              this.options.hide = this.options.active;
              this.options.active++;
            }
          }
        })
      );
    }
  }

  constructor(
    /* tslint:disable-next-line:ban-types */
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
}
