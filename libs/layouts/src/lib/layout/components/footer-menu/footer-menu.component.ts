import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';

import { NavLink } from '../../interfaces/nav-link.interface';
import { FOOTER_GROUPS_LINKS } from '../../layouts.tokens';

@Component({
  selector: 'medium-stories-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterMenuComponent {
  /**
   * Max show level
   */
  maxLevel = 2;

  constructor(@Optional() @Inject(FOOTER_GROUPS_LINKS) public navLinks: NavLink[]) {}
}
