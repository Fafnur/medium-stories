import { Injectable } from '@angular/core';
import { ApolloError } from 'apollo-client';
import { Observable } from 'rxjs';

import { User } from '@medium-stories/entities';
import { UserApollo } from '@medium-stories/users';

@Injectable()
export class UserService {
  constructor(private userApollo: UserApollo) {}

  getUser(): Observable<User | ApolloError> {
    return this.userApollo.loadUser();
  }
}
