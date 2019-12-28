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
   * After id
   */
  after: number;

  /**
   * Slice
   */
  first: number;

  /**
   * Offset
   */
  offset: number;

  /**
   * Is force
   */
  force: boolean;
}
