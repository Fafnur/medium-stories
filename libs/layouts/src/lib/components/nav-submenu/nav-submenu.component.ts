import { ChangeDetectionStrategy, Component, Optional, Inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { LayoutFacade } from '../../+state/layout.facade';
import { NavLink } from '../../interfaces/nav-link.interface';
import { NAV_LINKS } from '../../layouts.tokens';

@Component({
  selector: 'medium-stories-nav-submenu',
  templateUrl: './nav-submenu.component.html',
  styleUrls: ['./nav-submenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          top: '0'
        })
      ),
      state(
        'closed',
        style({
          top: '-100%'
        })
      ),
      transition('* => open', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
      transition('open => closed', [animate('0.5s')])
    ])
  ]
})
export class NavSubmenuComponent {
  constructor(public layoutFacade: LayoutFacade, @Optional() @Inject(NAV_LINKS) public navLinks: NavLink[]) {}

  onMouseleave(event: MouseEvent): void {
    if (event.clientY > 100) {
      this.layoutFacade.hideSubMenu();
    }
  }

  trackByFn(index: number, navLink: NavLink): string {
    return navLink.label;
  }
}
