/**
 * Nav link interface
 */
export interface NavLink {
  /**
   * Hash links
   */
  anchors?: HashLink[];

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

/**
 * HashLink interface
 */
export interface HashLink {
  /**
   * Label
   */
  label: string;

  /**
   * Hash link
   */
  link: string;
}
