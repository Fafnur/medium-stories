import { ApolloResponse } from '@medium-stories/common';
import { Event } from '@medium-stories/entities';

/**
 * Event apollo
 */
export abstract class EventApollo {
  /**
   * Observed events
   */
  abstract loadEvent(id: number, queryParams?: object): ApolloResponse<Event>;

  /**
   * Observed events
   */
  abstract loadEvents(queryParams?: object): ApolloResponse<Event[]>;
}
