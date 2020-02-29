import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError } from 'apollo-client';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApolloRequest, extractApolloResponse } from '@medium-stories/common';
import { SignInResponse, User } from '@medium-stories/entities';
import { LocalStorage } from '@medium-stories/storage';

export const authRequest: ApolloRequest = {
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

@Injectable()
export class AuthService {
  constructor(private apollo: Apollo, private localStorage: LocalStorage) {}

  login(): Observable<SignInResponse> {
    return this.apollo
      .query<{ login: SignInResponse }>({ query: authRequest.query })
      .pipe(
        map(result => {
          const signInResponse = extractApolloResponse<SignInResponse>(result, authRequest.keys);

          return signInResponse;
        }),
        catchError((error: ApolloError) => throwError(error))
      );
  }
}
