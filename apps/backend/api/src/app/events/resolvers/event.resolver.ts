import { Resolver, Query, Args } from '@nestjs/graphql';

import { Event } from '@medium-stories/entities';

import { EventService } from '../services/event.service';

@Resolver('Event')
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query('events')
  async getEvents(
    @Args('offset') offset?: number,
    @Args('limit') limit?: number,
    @Args('order') order?: string,
    @Args('excludeLast') excludeLast?: boolean
  ): Promise<Event[]> {
    const result = await this.eventService.find({ take: limit, skip: offset, order: order ? JSON.parse(order) : null });

    return excludeLast ? result.slice(0, result.length - 1) : result;
  }

  @Query('event')
  async getEvent(@Args('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Query('eventLast')
  async getEventLAst(): Promise<Event> {
    const result = await this.eventService.find({ take: 1, skip: 0, order: JSON.parse('{"id":"DESC"}') });

    return result && result.length ? result[0] : null;
  }
}
