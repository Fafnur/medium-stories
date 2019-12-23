import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EntityServiceOptions, extendOptions } from '@medium-stories/entities';

import { EventEntity } from '../entities/event.entity';

export const eventServiceOptions: EntityServiceOptions = {
  relations: ['image']
};

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly userRepository: Repository<EventEntity>
  ) {}

  async find(options?: EntityServiceOptions): Promise<EventEntity[]> {
    const payload = extendOptions(eventServiceOptions, options);
    return await this.userRepository.find(payload);
  }

  async findOne(id: number, options?: EntityServiceOptions): Promise<EventEntity> {
    const payload = extendOptions(eventServiceOptions, options);
    return await this.userRepository.findOne(id, payload);
  }
}
