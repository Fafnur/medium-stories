import { userStub } from '@medium-stories/users/testing';

import { UserService } from './user-easy.service';

describe('UserEasyService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('getUser() should return user', () => {
    expect(service.getUser()).toEqual(userStub);
  });
});
