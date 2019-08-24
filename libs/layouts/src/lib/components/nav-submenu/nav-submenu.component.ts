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
          top: '-33rem'
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

  /**
   * Check submenu for navItemId and navSubItemId
   * @param navItemId Nav item id (root level)
   * @param navSubItemId Nav item for submenu (second level)
   */
  hasSubmenu(navItemId: number | null, navSubItemId: number | null): boolean {
    return (
      navItemId !== null &&
      navSubItemId !== null &&
      this.navLinks[navItemId] &&
      !!this.navLinks[navItemId].children &&
      this.navLinks[navItemId].children[navSubItemId] &&
      !!this.navLinks[navItemId].children[navSubItemId].children
    );
  }

  /**
   * Check and hide submenu after mouseleave
   * @param event MouseEvent
   */
  onMouseleave(event: MouseEvent): void {
    if (event.clientY > 112) {
      this.layoutFacade.hideSubMenu();
    }
  }

  trackByFn(index: number, navLink: NavLink): string {
    return navLink.label;
  }
}
