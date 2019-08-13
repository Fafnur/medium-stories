import { ResponsiveProperties } from './responsive.interface';

/**
 * Responsive Service
 */
export abstract class ResponsiveService {
  /**
   * Check is between for rules
   * @param type current type
   * @param expressions collection expressions
   */
  abstract checkBetween(type: string, expressions: string[]): boolean;

  /**
   * Check is equal for rules
   * @param type current type
   * @param expressions collection expressions (union equivalents expression: sm or md Or lg ...)
   */
  abstract checkEqual(type: string, expressions: string[]): boolean;

  /**
   * Check is max for rules
   * @param type current type
   * @param expressions collection expressions
   */
  abstract checkMax(type: string, expressions: string[]): boolean;

  /**
   * Check is min for rules
   * @param type current type
   * @param expressions collection expressions
   */
  abstract checkMin(type: string, expressions: string[]): boolean;

  /**
   * Return changed state props for changed window props
   * @param props Window properties
   */
  abstract getChangesByProperties(props: Partial<ResponsiveProperties>): Partial<ResponsiveProperties>;

  /**
   * Return responsive properties for state
   */
  abstract getResponsiveProperties(): ResponsiveProperties;

  /**
   * Return responsive type by window width
   * @param width window width
   */
  abstract getResponsiveTypeByWidth(width: number): string;

  /**
   * Check is mobile width
   * @param width window width
   */
  abstract isMobile(width: number): boolean;
}
