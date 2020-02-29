import { Event } from './event.entity';
import { Media } from './media.entity';

/**
 * User interface
 */
export interface User {
  /**
   * Created at
   */
  created: string;

  /**
   * Email
   */
  email?: string;

  /**
   * Phone
   */
  phone: string;

  /**
   * ID
   */
  id: number;

  /**
   * Password
   */
  password?: string;

  /**
   * Username
   */
  username: string;

  /**
   * Updated at
   */
  updated: string;
}

/**
 * User relations
 */
export interface UserRelations {
  /**
   * Events
   */
  events: Event[];

  /**
   * Medias
   */
  medias: Media[];
}

/**
 * User roles interface
 */
export interface UserRoles {
  /**
   * User roles
   */
  roles: string[];

  /**
   * Check role
   * @param role Name role
   */
  hasRole(role: string): boolean;
}
