import { User } from './user.entity';

/**
 * Event interface
 */
export interface Event {
  /**
   * Event body
   */
  body: string;

  /**
   * Created at
   */
  created: number;

  /**
   * ID
   */
  id: number;

  /**
   * Owner
   */
  owner: User;

  /**
   * Event is published
   */
  published: boolean;

  /**
   * Event title
   */
  title: string;

  /**
   * Updated at
   */
  updated: number;
}
