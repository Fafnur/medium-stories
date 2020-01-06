import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ResponsiveFacade } from '@medium-stories/responsive';
import { TranslationFacade } from '@medium-stories/translation';

@Component({
  selector: 'medium-stories-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private responsiveFacade: ResponsiveFacade, private translationFacade: TranslationFacade) {
    this.responsiveFacade.init();
    this.translationFacade.init();
  }
}
