import { ApolloError } from 'apollo-client';

import { ApiError } from '../../lib/api/api.interface';

export const apiErrorStub: ApiError = {
  error: 'Api Error',
  message: 'Error Api'
};

const apiErrorResponseOptions = { status: 400, statusText: 'Bad Request' };

export const apolloErrorStub: ApolloError = {
  name: 'Error Apollo',
  message: 'Error Apollo',
  extraInfo: null,
  networkError: { ...apiErrorStub, name: 'Api Error' },
  graphQLErrors: null
};
