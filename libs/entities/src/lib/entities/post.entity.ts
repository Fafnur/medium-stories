import { Media } from './media.entity';
import { User } from './user.entity';

/**
 * Post interface
 */
export interface Post {
  /**
   * Post body
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
   * Password
   */
  media?: Media[];

  /**
   * Owner
   */
  owner: User;

  /**
   * Post is published
   */
  published: boolean;

  /**
   * Post title
   */
  title: string;

  /**
   * Updated at
   */
  updated: number;
}
