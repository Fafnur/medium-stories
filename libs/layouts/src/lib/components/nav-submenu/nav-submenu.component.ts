import { ChangeDetectionStrategy, Component, Optional, Inject } from '@angular/core';

import { LayoutFacade } from '../../+state/layout.facade';
import { NavLink } from '../../interfaces/nav-link.interface';
import { NAV_LINKS } from '../../layouts.tokens';

@Component({
  selector: 'medium-stories-nav-submenu',
  templateUrl: './nav-submenu.component.html',
  styleUrls: ['./nav-submenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavSubmenuComponent {
  constructor(public layoutFacade: LayoutFacade, @Optional() @Inject(NAV_LINKS) public navLinks: NavLink[]) {}

  onMouseleave(event: MouseEvent): void {
    if (event.clientY > 100) {
      this.layoutFacade.hideSubMenu();
    }
  }
}
