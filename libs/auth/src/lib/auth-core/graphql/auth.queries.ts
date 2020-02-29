import gql from 'graphql-tag';

import { ApolloRequest } from '@medium-stories/common';

export const loginRequest: ApolloRequest = {
  keys: ['login'],
  query: gql`
    query {
      login {
        expiresIn
        accessToken
        id
      }
    }
  `
};

export const logoutRequest: ApolloRequest = {
  keys: ['logout'],
  query: gql`
    query {
      logout
    }
  `
};
