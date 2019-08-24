import { InjectionToken } from '@angular/core';

import { NavLink } from './interfaces/nav-link.interface';

export const NAV_LINKS = new InjectionToken<NavLink[]>('NavMenu');
