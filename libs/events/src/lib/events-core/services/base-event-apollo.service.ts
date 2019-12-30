import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError } from 'apollo-client';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApolloResponse, extractApolloResponse } from '@medium-stories/common';
import { Event } from '@medium-stories/entities';

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

  loadEvents(queryParams: object = {}): ApolloResponse<Event[]> {
    return this.apollo
      .query<{ events: Event[] }>({ query: eventRequests.eventsRequest.query })
      .pipe(
        map(result => extractApolloResponse(result, eventRequests.eventsRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      );
  }
}
