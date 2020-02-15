import { Dictionary } from '@medium-stories/common';

import { MsMobileDirective } from './directives/ms-mobile.directive';
import { ResponsiveMode } from './interfaces/responsive.interface';
import { AdaptiveSyncPipe } from './pipes/adaptive-sync.pipe';
import { AdaptivePipe } from './pipes/adaptive.pipe';

export const RESPONSIVE_SIZE_DEFAULT: Dictionary<number> = {
  xs: 0,
  nm: 320,
  mkm: 400,
  mm: 480,
  sm: 550,
  md: 768,
  lg: 992,
  xl: 1200,
  hg: 1400,
  zh: 1600
};

export const RESPONSIVE_MODE_DEFAULT: ResponsiveMode = {
  sizes: RESPONSIVE_SIZE_DEFAULT,
  mobile: 'md'
};

export const responsivePipes: any[] = [AdaptivePipe, AdaptiveSyncPipe];

export const responsiveDirectives: any[] = [MsMobileDirective];
