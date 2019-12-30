import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslationFacade } from '@medium-stories/translation';

@Component({
  selector: 'medium-stories-side-languages',
  templateUrl: './side-languages.component.html',
  styleUrls: ['./side-languages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideLanguagesComponent {
  constructor(public translationFacade: TranslationFacade) {}
}
