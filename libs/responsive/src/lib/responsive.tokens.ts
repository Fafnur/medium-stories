import { InjectionToken } from '@angular/core';

import { ResponsiveMode } from './interfaces/responsive.interface';

export const RESPONSIVE_MODE = new InjectionToken<ResponsiveMode>('ResponsiveMode');
