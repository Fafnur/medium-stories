import { Locale } from '../types/locale.type';
import { Media } from './media.entity';
import { User } from './user.entity';

/**
 * Post interface
 */
export interface Post {
  /**
   * Post body
   */
  body: Locale;

  /**
   * Created at
   */
  created: string;

  /**
   * ID
   */
  id: number;

  /**
   * Main post image
   */
  image: Media;

  /**
   * Password
   */
  media?: Media[];

  /**
   * Owner
   */
  owner: User;

  /**
   * Post published at
   */
  published?: string;

  /**
   * Post is published
   */
  isPublished: boolean;

  /**
   * Post title
   */
  title: Locale;

  /**
   * Updated at
   */
  updated: string;
}
