/**
 * Nav menu state
 */
export interface NavMenu {
  /**
   * Current hover state
   */
  active: NavMenuEvent;

  /**
   * Hovered items
   */
  hovered: (number | null)[];

  /**
   * Previous hover state
   */
  previous: NavMenuEvent;

  /**
   * Is showed sub menu
   */
  showedSubmenu: boolean;

  /**
   * Count sub levels for menu
   */
  subLevels: number;
}

/**
 * Nav menu event state
 */
export interface NavMenuEvent {
  /**
   * String nav id
   */
  id?: string;

  /**
   * Current hovered index
   */
  index: number;

  /**
   * Current level
   */
  level: number;

  /**
   * Is hovered/leave
   */
  isHovered?: boolean | null;

  /**
   * Current all hovered root and sub menu items
   */
  hovered?: (number | null)[];
}
