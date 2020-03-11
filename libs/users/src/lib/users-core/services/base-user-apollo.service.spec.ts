import { async, TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { of, throwError } from 'rxjs';

import { User } from '@medium-stories/entities';
import { userStub } from '@medium-stories/users/testing';

import { UserApollo } from '../interfaces/user-apollo.interface';
import { BaseUserApollo } from './base-user-apollo.service';

describe('BaseUserApollo', () => {
  let service: UserApollo;
  let apollo: Apollo;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: UserApollo,
          useClass: BaseUserApollo
        },
        {
          provide: Apollo,
          useValue: {}
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(UserApollo);
    apollo = TestBed.inject(Apollo);
  });

  it('get() should return user', async done => {
    try {
      const queryMock = { query: null };
      const response: ApolloQueryResult<{ user: User }> = { data: { user: userStub }, loading: false, networkStatus: null, stale: false };
      apollo.query = () => of(response as any);

      const result: ApolloQueryResult<{ user: User }> = await readFirst(apollo.query<{ user: User }>(queryMock));

      expect(result.data.user).toEqual(userStub);

      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('get() should return user load error', async done => {
    const response = {
      message: 'Apollo error',
      graphQLErrors: [],
      networkError: null,
      extraInfo: null
    };
    try {
      const queryMock = { query: null };

      apollo.query = () => throwError(response);
      await readFirst(apollo.query(queryMock));

      done();
    } catch (err) {
      expect(err).toEqual(response);
      done();
    }
  });
});
