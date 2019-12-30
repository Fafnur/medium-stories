import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LayoutFacade } from '../../../layout-core/+state/layout.facade';

@Component({
  selector: 'medium-stories-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerComponent {
  constructor(public layoutFacade: LayoutFacade) {}
}
