import { Injectable } from '@angular/core';

import { User } from '@medium-stories/entities';
import { userStub } from '@medium-stories/users/testing';

@Injectable()
export class UserService {
  getUser(): User {
    return userStub;
  }
}
