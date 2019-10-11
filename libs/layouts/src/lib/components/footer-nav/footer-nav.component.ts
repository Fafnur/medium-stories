import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';

import { NavLink } from '../../interfaces/nav-link.interface';
import { FOOTER_NAV_LINKS } from '../../layouts.tokens';

@Component({
  selector: 'medium-stories-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterNavComponent {
  constructor(@Optional() @Inject(FOOTER_NAV_LINKS) public navLinks: NavLink[]) {}
}
