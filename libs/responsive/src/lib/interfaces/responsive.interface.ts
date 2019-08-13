import { Dictionary } from '@medium-stories/common';

/**
 * Responsive mode
 */
export interface ResponsiveMode {
  /**
   * Is mobile size
   */
  mobile: string;

  /**
   * Responsive dictionary
   */
  sizes: Dictionary<number>;
}

/**
 * Responsive properties
 */
export interface ResponsiveProperties {
  [p: string]: any;

  /**
   * Window inner height
   */
  height: number;

  /**
   * Is mobile
   */
  mobile?: boolean;

  /**
   * Is mobile
   */
  responsiveType?: string;

  /**
   * Window inner width
   */
  width: number;
}
