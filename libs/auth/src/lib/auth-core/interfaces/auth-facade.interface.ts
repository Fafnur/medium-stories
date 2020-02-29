import { ApolloError } from 'apollo-client';
import { Observable } from 'rxjs';

import { SignInPayload } from '@medium-stories/entities';

/**
 * Auth facade
 */
export abstract class AuthFacade {
  /**
   * Observed sign in
   */
  signIn$: Observable<SignInPayload>;

  /**
   * Observed sign in error
   */
  signInError$: Observable<ApolloError>;

  /**
   * Observed sign in run
   */
  signInRun$: Observable<boolean>;

  /**
   * Observed sign out error
   */
  signOutError$: Observable<ApolloError>;

  /**
   * Observed sign out run
   */
  signOutRun$: Observable<boolean>;

  /**
   * Sign in
   * @param force Force
   */
  abstract signIn(force?: boolean): void;

  /**
   * Set sign in payload
   */
  abstract signInSet(payload: SignInPayload): void;

  /**
   * Clear sign in payload
   */
  abstract signInClear(): void;

  /**
   * Sign out
   * @param force Force
   */
  abstract signOut(force?: boolean): void;
}
