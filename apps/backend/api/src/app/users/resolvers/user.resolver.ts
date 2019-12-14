import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { CurrentUser } from '../decorators/user.decorator';
import { GqlAuthGuard } from '../guards/gql.auth-guard';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('user')
  @UseGuards(GqlAuthGuard)
  async whoAmI(@CurrentUser() user: UserEntity) {
    return this.userService.findOne(user.id);
  }
}
