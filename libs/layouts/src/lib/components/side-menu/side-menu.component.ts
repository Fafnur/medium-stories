import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { LayoutFacade } from '../../+state/layout.facade';
import { NavLink } from '../../interfaces/nav-link.interface';
import { NAV_LINKS } from '../../layouts.tokens';

@Component({
  selector: 'medium-stories-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
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
export class SideMenuComponent {
  constructor(public layoutFacade: LayoutFacade, @Optional() @Inject(NAV_LINKS) public navLinks: NavLink[]) {}

  trackByFn(index: number, navLink: NavLink): string {
    return navLink.label;
  }
}
