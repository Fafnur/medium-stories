import { InjectionToken } from '@angular/core';

import { NavLink } from './interfaces/nav-link.interface';

export const NAV_LINKS = new InjectionToken<NavLink[]>('NavMenu');

export const FOOTER_NAV_LINKS = new InjectionToken<NavLink[]>('FooterNavMenu');

export const FOOTER_GROUPS_LINKS = new InjectionToken<NavLink[]>('FooterGroupsMenu');
