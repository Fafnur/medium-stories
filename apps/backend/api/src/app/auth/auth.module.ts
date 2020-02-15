import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { environment } from '../../environments/environment';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/jwt.strategy';
import { PasswordService } from './services/password.service';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: environment.jwt.secret,
      signOptions: {
        expiresIn: environment.jwt.expiresIn
      }
    })
  ],
  providers: [AuthService, PasswordService, JwtStrategy, AuthResolver],
  exports: [AuthService, PassportModule]
})
export class AuthModule {}
