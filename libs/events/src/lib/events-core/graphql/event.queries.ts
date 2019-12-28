import gql from 'graphql-tag';

import { ApolloRequest } from '@medium-stories/common';

const eventsRequest: ApolloRequest = {
  keys: ['events'],
  query: gql`
    query {
      events {
        id
        title
        place
        start
        end
        created
        image {
          id
        }
      }
    }
  `
};

const eventRequest: ApolloRequest = {
  keys: ['event'],
  query: gql`
    query($id: Int!) {
      event(id: $id) {
        id
        title
        created
        image {
          id
        }
      }
    }
  `
};

export const eventRequests = {
  eventsRequest,
  eventRequest
};
