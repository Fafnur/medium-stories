import { Type } from '@angular/core';

import { ResponsiveService } from './responsive-service.interface';
import { ResponsiveStorage } from './responsive-storage.interface';
import { ResponsiveMode } from './responsive.interface';

/**
 * Responsive module options
 */
export interface ResponsiveOptions {
  /**
   * Responsive mode
   */
  mode: ResponsiveMode;

  /**
   * Responsive service
   */
  service: Type<ResponsiveService>;

  /**
   * Responsive storage
   */
  storage: Type<ResponsiveStorage>;
}
