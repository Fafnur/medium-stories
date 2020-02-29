import { ApolloError } from 'apollo-client';
import { Observable } from 'rxjs';

import { User } from '@medium-stories/entities';

/**
 * User facade
 */
export abstract class UserFacade {
  /**
   * Observed user
   */
  user$: Observable<User>;

  /**
   * Observed user load error
   */
  userLoadError$: Observable<ApolloError>;

  /**
   * Observed user load run
   */
  userLoadRun$: Observable<boolean>;

  /**
   * Load user
   * @param force Force
   */
  abstract loadUser(force?: boolean): void;
}
