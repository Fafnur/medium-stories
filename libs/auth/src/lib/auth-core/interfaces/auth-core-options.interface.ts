import { Type } from '@angular/core';

import { AuthApollo } from './auth-apollo.interface';
import { AuthFacade } from './auth-facade.interface';
import { AuthStorage } from './auth-storage.interface';

/**
 * Auth core options
 */
export interface AuthCoreOptions {
  /**
   * Auth apollo service
   */
  apollo: Type<AuthApollo>;

  /**
   * Auth facade
   */
  facade: Type<AuthFacade>;

  /**
   * Auth facade
   */
  storage: Type<AuthStorage>;
}
