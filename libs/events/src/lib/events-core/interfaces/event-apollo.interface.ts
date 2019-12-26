import { ApolloResponse } from '@medium-stories/common';

/**
 * Event apollo
 */
export abstract class EventApollo {
  /**
   * Observed events
   */
  abstract events$: ApolloResponse<Event[]>;

  /**
   * Observed events
   */
  abstract event$: (id: number) => ApolloResponse<Event>;
}
