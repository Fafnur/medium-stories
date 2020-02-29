import gql from 'graphql-tag';

import { ApolloRequest } from '@medium-stories/common';

export const userRequest: ApolloRequest = {
  keys: ['user'],
  query: gql`
    query {
      user {
        id
        username
        email
        phone
        created
        updated
      }
    }
  `
};
