/**
 * Nav link interface
 */
export interface NavLink {
  /**
   * Children nav links
   */
  children?: NavLink[];

  /**
   * Is external
   */
  external?: boolean;

  /**
   * Nav link label
   */
  label: string;

  /**
   * Route
   */
  route?: any[] | string;

  /**
   * Query params
   */
  queryParams?: string;
}
