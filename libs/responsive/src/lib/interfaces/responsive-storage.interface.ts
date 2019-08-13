import { ResponsiveProperties } from './responsive.interface';

/**
 * Responsive storage interface
 */
export abstract class ResponsiveStorage {
  /**
   * Return window properties
   */
  abstract getProperties(): ResponsiveProperties;

  /**
   * Remove window properties
   */
  abstract removeProperties(): void;

  /**
   * Set window properties
   */
  abstract setProperties(props: Partial<ResponsiveProperties>): void;
}
