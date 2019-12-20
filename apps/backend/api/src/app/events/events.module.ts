import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventEntity } from './entities/event.entity';
import { EventResolver } from './resolvers/event.resolver';
import { EventService } from './services/event.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
  providers: [EventService, EventResolver],
  exports: [EventService]
})
export class EventsModule {}
