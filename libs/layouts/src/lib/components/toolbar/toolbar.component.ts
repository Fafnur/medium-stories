import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LayoutFacade } from '../../+state/layout.facade';

@Component({
  selector: 'medium-stories-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  constructor(public layoutFacade: LayoutFacade) {}
}
