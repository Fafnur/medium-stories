/**
 * Event payload
 */
export interface EventPayload {
  /**
   * Event id
   */
  id: number;

  /**
   * Is force
   */
  force: boolean;
}

/**
 * Events payload
 */
export interface EventsPayload {
  /**
   * Order
   */
  order: string;

  /**
   * Limit
   */
  limit: number;

  /**
   * Offset
   */
  offset: number;

  /**
   * Is force
   */
  force: boolean;

  /**
   * Exclude last
   */
  excludeLast?: boolean;
}
