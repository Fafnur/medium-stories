import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { filter } from 'rxjs/operators';

import { LayoutFacade } from '../../../layout-core/+state/layout.facade';

@Component({
  selector: 'ms-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  @Input() active: string;

  /**
   * Observed breadcrumbs
   */
  breadcrumbs$ = this.layoutFacade.breadcrumbs$.pipe(filter(value => !!value));

  constructor(public layoutFacade: LayoutFacade) {}
}
