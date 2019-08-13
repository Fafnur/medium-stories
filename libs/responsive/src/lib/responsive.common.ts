import { ResponsiveMode } from './interfaces/responsive.interface';
import { AdaptivePipe } from './pipes/adaptive.pipe';
import { AdaptiveSyncPipe } from './pipes/adaptive-sync.pipe';

export const RESPONSIVE_MODE_DEFAULT: ResponsiveMode = {
  sizes: {
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
  },
  mobile: 'md'
};

export const responsivePipes: any[] = [AdaptivePipe, AdaptiveSyncPipe];
