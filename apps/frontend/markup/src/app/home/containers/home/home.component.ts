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
        src: 'assets/images/slides/slide-1.webp',
        title: 'Slide 1',
        description: 'Description 1',
        route: '/events'
      },
      {
        src: 'assets/images/slides/slide-2.webp',
        title: 'Slide 2',
        description: 'Description 2',
        route: '/events'
      },
      {
        src: 'assets/images/slides/slide-3.webp',
        title: 'Slide 3',
        description: 'Description 3',
        route: '/events'
      }
    ]
  };
}
