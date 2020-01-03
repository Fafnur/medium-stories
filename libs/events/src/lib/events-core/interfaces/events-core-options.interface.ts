import { Type } from '@angular/core';

import { EventApollo } from './event-apollo.interface';

/**
 * Events core options
 */
export interface EventsCoreOptions {
  /**
   * Events apollo service
   */
  apollo: Type<EventApollo>;
}
