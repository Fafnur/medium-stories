import { Resolver, Query } from '@nestjs/graphql';

import { Event } from '@medium-stories/entities';

import { EventService } from '../services/event.service';

@Resolver('Event')
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query('events')
  async getEvents(): Promise<Event[]> {
    return await this.eventService.find();
  }
}
