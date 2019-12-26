import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { createQuery } from '@medium-stories/common';

import { eventRequests } from '../graphql/event.queries';
import { EventApollo } from '../interfaces/event-apollo.interface';

@Injectable()
export class BaseEventApollo implements EventApollo {
  events$ = createQuery<Event[]>(this.apollo, eventRequests.eventsRequest);

  event$ = id => createQuery<Event>(this.apollo, eventRequests.eventRequest, { id });

  constructor(private apollo: Apollo) {}
}
