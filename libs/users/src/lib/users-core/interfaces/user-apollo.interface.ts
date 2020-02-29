import { ApolloResponse } from '@medium-stories/common';
import { User } from '@medium-stories/entities';

/**
 * User apollo
 */
export abstract class UserApollo {
  /**
   * Load current user
   */
  abstract loadUser(queryParams?: object): ApolloResponse<User>;
}
