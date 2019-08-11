import { Component } from '@angular/core';

import { TranslationFacade } from '@medium-stories/translation';

@Component({
  selector: 'medium-stories-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translationFacade: TranslationFacade) {
    this.translationFacade.init();
  }
}
