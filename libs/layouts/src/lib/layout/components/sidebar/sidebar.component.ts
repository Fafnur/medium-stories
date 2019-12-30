import { ChangeDetectionStrategy, Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { LayoutFacade } from '../../../layout-core/+state/layout.facade';

@Component({
  selector: 'medium-stories-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleSidebar', [
      state(
        'open',
        style({
          left: '0'
        })
      ),
      state(
        'closed',
        style({
          left: '100%'
        })
      ),
      transition('* => open', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
      transition('open => closed', [animate('0.35s')])
    ])
  ]
})
export class SidebarComponent {
  constructor(public layoutFacade: LayoutFacade) {}
}
