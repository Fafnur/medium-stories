import { Injectable } from '@angular/core';

import { User } from '@medium-stories/entities';

@Injectable()
export class FakeUserService {
  /**
   * User
   */
  private user: User;

  constructor() {
    this.user = {
      created: '2020-03-06',
      email: 'ivan@dorn.ru',
      phone: '9231002020',
      id: 1,
      username: 'Ivan Dorn',
      updated: '2020-03-06'
    };
  }

  getUser(): User {
    return this.user;
  }

  isLoggedIn(): boolean {
    return this.user != null;
  }

  logout(): void {
    this.user = null;
  }
}
