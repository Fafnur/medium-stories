import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutFacade } from '../../../layout-core/+state/layout.facade';
import { NavLink } from '../../interfaces/nav-link.interface';
import { NAV_LINKS } from '../../layouts.tokens';

@Component({
  selector: 'medium-stories-nav-anchors',
  templateUrl: './nav-anchors.component.html',
  styleUrls: ['./nav-anchors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavAnchorsComponent {
  /**
   * Active link
   */
  activeLink!: NavLink | null;

  constructor(public layoutFacade: LayoutFacade, @Optional() @Inject(NAV_LINKS) public navLinks: NavLink[], private router: Router) {
    const url = this.router.routerState.snapshot.url;
    this.activeLink = this.navLinks.find(navLink => navLink.route === url) || null;
  }
}
