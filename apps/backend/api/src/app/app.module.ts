import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';

import { AuthModule } from './auth/auth.module';
import { EventEntity } from './events/entities/event.entity';
import { EventsModule } from './events/events.module';
import { MediaEntity } from './media/entities/media.entity';
import { MediasModule } from './media/medias.module';
import { UserEntity } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

import { AppController } from './app.controller';
import { resolverMap } from './app.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity, EventEntity, MediaEntity]
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
      resolvers: [resolverMap]
    }),
    UsersModule,
    AuthModule,
    EventsModule,
    MediasModule
  ],
  controllers: [AppController]
})
export class AppModule {}
