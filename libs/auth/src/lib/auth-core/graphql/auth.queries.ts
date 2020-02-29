import gql from 'graphql-tag';

import { ApolloRequest } from '@medium-stories/common';

export const loginRequest: ApolloRequest = {
  keys: ['login'],
  query: gql`
    query($username: String!, $password: String!) {
      login(username: $username, password: $password) {
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
