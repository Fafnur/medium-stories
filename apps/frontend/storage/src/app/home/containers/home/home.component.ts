import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CookieStorage } from '@medium-stories/storage';

@Component({
  selector: 'medium-stories-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  /**
   * Counter storage key
   */
  static readonly counterKey = 'myCounter';

  /**
   * Counter
   */
  counter: number;

  constructor(private cookieStorage: CookieStorage) {
    const savedCounter = this.cookieStorage.getItem(HomeComponent.counterKey);
    this.counter = savedCounter ? +savedCounter : 0;
  }

  /**
   * To increment the counter
   */
  add(): void {
    this.counter++;
    this.cookieStorage.setItem(HomeComponent.counterKey, this.counter.toString());
  }
}
