import { TestBed } from '@angular/core/testing';
import { cold, hot } from '@nrwl/angular/testing';

import { UserApollo } from '@medium-stories/users';
import { userStub } from '@medium-stories/users/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let apollo: UserApollo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {
          provide: UserApollo,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(UserService);
    apollo = TestBed.inject(UserApollo);
  });

  it('getUser() should return user', () => {
    const source = cold('-a-|', { a: userStub });
    const expected = hot('-a-|', { a: userStub });

    apollo.loadUser = jest.fn(() => source);
    expect(service.getUser()).toBeObservable(expected);
  });
});
