import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LayoutFacade } from '../../../layout-core/+state/layout.facade';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ms-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  /**
   * Observed breadcrumbs
   */
  breadcrumbs$ = this.layoutFacade.breadcrumbs$.pipe(filter(value => !!value));

  constructor(public layoutFacade: LayoutFacade) {}
}
