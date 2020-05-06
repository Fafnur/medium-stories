import { Injectable } from '@angular/core';

import { User } from '@medium-stories/entities';

import { FakeUserService } from './fake-user.service';

@Injectable()
export class FakeHardUserService {
  constructor(private userService: FakeUserService) {}

  getUser(): User {
    return this.userService.getUser();
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  logout(): void {
    this.userService.logout();
  }
}
