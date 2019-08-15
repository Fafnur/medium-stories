import { ChangeDetectionStrategy, Component } from '@angular/core';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TranslationFacade } from '@medium-stories/translation';

@Component({
  selector: 'medium-stories-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  data = null;

  preload$ = timer(3000).pipe(
    tap(() => {
      this.data = [1, 2, 3, 4, 5, 6];
    })
  );

  constructor(public translationFacade: TranslationFacade) {}

  getCalcVar(): string {
    return this.data ? this.data.length : 0;
  }
}
