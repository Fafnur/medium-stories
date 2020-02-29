import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError } from 'apollo-client';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApolloResponse, extractApolloResponse } from '@medium-stories/common';
import { User } from '@medium-stories/entities';

import * as UserQueries from '../graphql/user.queries';
import { UserApollo } from '../interfaces/user-apollo.interface';

@Injectable()
export class BaseUserApollo implements UserApollo {
  constructor(private apollo: Apollo) {}

  loadUser(queryParams: object = {}): ApolloResponse<User> {
    return this.apollo
      .query<{ user: User }>({ query: UserQueries.userRequest.query })
      .pipe(
        map(result => extractApolloResponse(result, UserQueries.userRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      );
  }
}
