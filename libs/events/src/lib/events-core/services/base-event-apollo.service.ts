import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError } from 'apollo-client';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApolloResponse, extractApolloResponse } from '@medium-stories/common';
import { Event } from '@medium-stories/entities';

import { EventsPayload } from '../../events-core/interfaces/event.interface';
import { eventRequests } from '../graphql/event.queries';
import { EventApollo } from '../interfaces/event-apollo.interface';

@Injectable()
export class BaseEventApollo implements EventApollo {
  constructor(private apollo: Apollo) {}

  loadEvent(id: number, queryParams: object = {}): ApolloResponse<Event> {
    return this.apollo
      .query<{ event: Event }>({ query: eventRequests.eventRequest.query, variables: { id } })
      .pipe(
        map(result => extractApolloResponse(result, eventRequests.eventRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      );
  }

  loadLastEvent(queryParams?: object): ApolloResponse<Event> {
    return this.apollo
      .query<{ eventLast: Event }>({ query: eventRequests.eventLastRequest.query })
      .pipe(
        map(result => extractApolloResponse(result, eventRequests.eventLastRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      );
  }

  loadEvents(queryParams: Partial<EventsPayload> = {}): ApolloResponse<Event[]> {
    return this.apollo
      .query<{ events: Event[] }>({
        query: eventRequests.eventsRequest.query,
        variables: queryParams
      })
      .pipe(
        map(result => extractApolloResponse(result, eventRequests.eventsRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      );
  }
}
