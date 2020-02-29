import { Type } from '@angular/core';

import { UserApollo } from './user-apollo.interface';
import { UserFacade } from './user-facade.interface';

/**
 * Users core options
 */
export interface UsersCoreOptions {
  /**
   * User apollo service
   */
  apollo: Type<UserApollo>;

  /**
   * User facade
   */
  facade: Type<UserFacade>;
}
