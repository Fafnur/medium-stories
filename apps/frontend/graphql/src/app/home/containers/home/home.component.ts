import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PromoCarouselOptions, PromoTopOptions } from '@medium-stories/layouts';

const carouselHomeConfig: Partial<PromoCarouselOptions> = {
  slides: [
    {
      src: 'assets/images/slides/slide-2.webp',
      title: 'home.slide1.title',
      description: 'home.slide1.description',
      route: '/events'
    },
    {
      src: 'assets/images/slides/slide-3.webp',
      title: 'home.slide2.title',
      description: 'home.slide2.description',
      route: '/events'
    },
    {
      src: 'assets/images/slides/slide-1.webp',
      title: 'home.slide3.title',
      description: 'home.slide3.description',
      route: '/events'
    }
  ],
  scrollAnchor: 'promo'
};

const promoTopOptions: PromoTopOptions = {
  background: 'assets/images/promo-top/promo-top-1.webp',
  title: 'menu.models.aventadorSVJRoadster',
  route: ['events']
};

@Component({
  selector: 'medium-stories-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  /**
   * Carousel home config
   */
  carouselHomeConfig = carouselHomeConfig;

  /**
   * Promo top options
   */
  promoTopOptions = promoTopOptions;
}
