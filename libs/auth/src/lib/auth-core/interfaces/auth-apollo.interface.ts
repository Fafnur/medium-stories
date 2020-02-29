import { ApolloResponse } from '@medium-stories/common';

import { SignInPayload, SignInResponse } from '@medium-stories/entities';

/**
 * Auth apollo
 */
export abstract class AuthApollo {
  /**
   * Login
   */
  abstract signIn(payload: SignInPayload, queryParams?: object): ApolloResponse<SignInResponse>;

  /**
   * Logout
   */
  abstract signOut(queryParams?: object): ApolloResponse<void>;
}
