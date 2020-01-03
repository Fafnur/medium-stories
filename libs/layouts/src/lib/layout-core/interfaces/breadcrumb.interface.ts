import { Params } from '@angular/router';

/**
 * Breadcrumb interface
 */
export interface Breadcrumb {
  /**
   * Label
   */
  label: string;

  /**
   * Params
   */
  params?: Params;

  /**
   * Url
   */
  url: string;
}
