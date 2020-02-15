import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';

import { Router } from '@angular/router';
import { LayoutFacade } from '../../../layout-core/+state/layout.facade';
import { NavLink } from '../../interfaces/nav-link.interface';
import { NavMenu } from '../../interfaces/nav-menu.interface';
import { NAV_LINKS } from '../../layouts.tokens';

@Component({
  selector: 'medium-stories-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toggleSidemenu', [
      state(
        'closed',
        style({
          height: '0'
        })
      ),
      state(
        'collapsed',
        style({
          height: '0'
        })
      ),
      state(
        'expanded',
        style({
          height: '*'
        })
      ),
      transition('* => closed', [animate('0.5s')]),
      transition('* => expanded', [animate('0.5s')]),
      transition('expanded => collapsed', [animate('0.5s')])
    ])
  ]
})
export class SideMenuComponent {
  constructor(public layoutFacade: LayoutFacade, @Optional() @Inject(NAV_LINKS) public navLinks: NavLink[], private router: Router) {}

  /**
   * Check overview
   * @param overview NavLink
   */
  hasOverview(overview: NavLink): boolean {
    return overview && overview.route !== this.router.routerState.snapshot.url;
  }

  trackByFn(index: number, navLink: NavLink): string {
    return navLink.label;
  }

  /**
   * Return animation name by id and index
   * @param id Parent id
   * @param index Current index on menu links
   * @param menu Nav menu state
   */
  private getAnimationState(id: string, index: number, menu: NavMenu): string {
    let animation = null;
    if (menu.active.index === null) {
      animation = 'closed';
    } else {
      if (menu.active.id === id && menu.active.index === index) {
        animation = menu.active.isHovered ? 'expanded' : 'collapsed';
      } else if (menu.previous.id === id) {
        if (menu.previous.index === index && menu.previous.level < menu.active.level) {
          animation = 'expanded';
        } else {
          animation = 'closed';
        }
      } else if (menu.active.id === menu.previous.id) {
        if (menu.active.id === id + '_' + index) {
          animation = 'expanded';
        } else {
          animation = 'closed';
        }
      } else {
        animation = 'closed';
      }
    }

    return animation;
  }
}
