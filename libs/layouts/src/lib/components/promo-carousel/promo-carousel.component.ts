import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';

import { ResponsiveFacade } from '@medium-stories/responsive';

import { PromoCarouselOptions } from '../../interfaces/promo-carousel.interface';

const OPTIONS_DEFAULT: PromoCarouselOptions = {
  slides: [],
  active: 0,
  hide: null,
  interval: 6000,
  indicators: true
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

  /**
   * Change slide
   */
  changeSlide$ = new Subject<number>();

  @Input() set config(options: Partial<PromoCarouselOptions>) {
    this.options = { ...OPTIONS_DEFAULT, ...options };
    if (isPlatformBrowser(this.platformId)) {
      this.watch$ = this.changeSlide$.pipe(
        startWith(-1),
        switchMap(index => {
          if (index >= 0) {
            this.options.hide = this.options.active;
            this.options.active = index;
          }
          return interval(this.options.interval).pipe(
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
        })
      );
    }
  }

  constructor(
    public responsiveFacade: ResponsiveFacade,
    /* tslint:disable-next-line:ban-types */
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const anchor = window.document.getElementById(this.options.scrollAnchor);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
