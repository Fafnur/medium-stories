import { Locale } from '../types/locale.type';
import { User } from './user.entity';

/**
 * Media interface
 */
export interface Media {
  /**
   * Created at
   */
  created: string;

  /**
   * Description
   */
  description?: Locale;

  /**
   * Owner
   */
  owner: User;

  /**
   * Post is published
   */
  published: boolean;

  /**
   * Password
   */
  src: string;

  /**
   * Title
   */
  title?: Locale;
}
