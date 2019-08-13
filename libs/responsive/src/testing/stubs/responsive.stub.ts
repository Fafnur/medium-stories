import { Dictionary } from '@medium-stories/common';

import { ResponsiveMode, ResponsiveProperties } from '../../lib/interfaces/responsive.interface';

export const responsiveSizesStub: Dictionary<number> = {
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

export const responsiveMobileStub = 'md';
export const responsiveTypeStub = 'zh';

export const responsiveModeStub: ResponsiveMode = {
  sizes: responsiveSizesStub,
  mobile: responsiveMobileStub
};

export const responsivePropertiesStub: ResponsiveProperties = {
  height: 1020,
  width: 1920,
  mobile: false
};

export const responsiveErrorStub = 'Responsive init error!';
