import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EventEntity } from '../entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly userRepository: Repository<EventEntity>
  ) {}

  async find(): Promise<EventEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<EventEntity> {
    return await this.userRepository.findOne(id);
  }
}
