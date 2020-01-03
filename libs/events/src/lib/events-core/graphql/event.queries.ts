import gql from 'graphql-tag';

import { ApolloRequest } from '@medium-stories/common';

const eventsRequest: ApolloRequest = {
  keys: ['events'],
  query: gql`
    query($limit: Int, $offset: Int, $order: String, $excludeFirst: Boolean, $excludeLast: Boolean) {
      events(limit: $limit, offset: $offset, order: $order, excludeFirst: $excludeFirst, excludeLast: $excludeLast) {
        id
        title
        place
        start
        end
        created
        image {
          id
          src
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
        body
        place
        start
        end
        created
        image {
          id
          src
        }
      }
    }
  `
};

const eventLastRequest: ApolloRequest = {
  keys: ['eventLast'],
  query: gql`
    query {
      eventLast {
        id
        title
        body
        place
        start
        end
        created
        image {
          id
          src
        }
      }
    }
  `
};

export const eventRequests = {
  eventsRequest,
  eventRequest,
  eventLastRequest
};
