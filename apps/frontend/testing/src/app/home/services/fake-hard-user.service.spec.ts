import { User } from '@medium-stories/entities';

import { userStub } from '@medium-stories/users/testing';

import { FakeHardUserService } from './fake-hard-user.service';

class FakeHardUserServiceMock extends FakeHardUserService {
  constructor() {
    super(null);
  }

  getUser(): User {
    return userStub;
  }

  isLoggedIn(): boolean {
    return true;
  }

  logout(): void {}
}

describe('FakeHardUserService', () => {
  let service: FakeHardUserService;

  beforeEach(() => {
    service = new FakeHardUserServiceMock();
  });

  it('getUser() should return user', () => {
    expect(service.getUser()).toEqual(userStub);
  });
});
