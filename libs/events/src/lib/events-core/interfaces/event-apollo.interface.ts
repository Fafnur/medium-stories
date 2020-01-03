import { ApolloResponse } from '@medium-stories/common';
import { Event } from '@medium-stories/entities';

/**
 * Event apollo
 */
export abstract class EventApollo {
  /**
   * Return event by id
   */
  abstract loadEvent(id: number, queryParams?: object): ApolloResponse<Event>;

  /**
   * Return last event
   */
  abstract loadLastEvent(queryParams?: object): ApolloResponse<Event>;

  /**
   * Return events with options
   */
  abstract loadEvents(queryParams?: object): ApolloResponse<Event[]>;
}
