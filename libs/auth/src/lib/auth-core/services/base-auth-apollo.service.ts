import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError } from 'apollo-client';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApolloResponse, extractApolloResponse } from '@medium-stories/common';
import { SignInPayload, SignInResponse, User } from '@medium-stories/entities';

import * as AuthQueries from '../graphql/auth.queries';
import { AuthApollo } from '../interfaces/auth-apollo.interface';

@Injectable()
export class BaseAuthApollo implements AuthApollo {
  constructor(private apollo: Apollo) {}

  signIn(payload: SignInPayload, queryParams: object = {}): ApolloResponse<SignInResponse> {
    return this.apollo
      .query<{ user: User }>({ query: AuthQueries.loginRequest.query, variables: payload })
      .pipe(
        map(result => extractApolloResponse(result, AuthQueries.loginRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      );
  }

  signOut(queryParams?: object): ApolloResponse<void> {
    return this.apollo
      .query<{ logout: boolean }>({ query: AuthQueries.logoutRequest.query })
      .pipe(
        map(result => null),
        catchError((error: ApolloError) => throwError(error))
      );
  }
}
