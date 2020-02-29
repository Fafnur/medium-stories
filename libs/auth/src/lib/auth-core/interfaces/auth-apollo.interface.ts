import { ApolloResponse } from '@medium-stories/common';

import { SignInResponse } from '@medium-stories/entities';

/**
 * Auth apollo
 */
export abstract class AuthApollo {
  /**
   * Login
   */
  abstract signIn(queryParams?: object): ApolloResponse<SignInResponse>;

  /**
   * Logout
   */
  abstract signOut(queryParams?: object): ApolloResponse<void>;
}
