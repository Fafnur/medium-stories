import { Args, Resolver, Query } from '@nestjs/graphql';

import { SignInPayload, SignInResponse } from '@medium-stories/entities';

import { SignIn } from '../decorators/auth.decorator';
import { AuthService } from '../services/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query('login')
  async getLogin(@SignIn() signInPayload: SignInPayload): Promise<SignInResponse> {
    return await this.authService.login(signInPayload);
  }

  @Query('logout')
  async getAuth(@Args('token') token: string): Promise<boolean> {
    return true;
  }
}
