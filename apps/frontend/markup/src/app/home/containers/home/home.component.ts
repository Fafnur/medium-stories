import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PromoCarouselOptions } from '@medium-stories/layouts';

@Component({
  selector: 'medium-stories-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  config: Partial<PromoCarouselOptions> = {
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
    scrollAnchor: 'main'
  };
}
