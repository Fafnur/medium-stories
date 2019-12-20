import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MediaEntity } from '../entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(MediaEntity)
    private readonly mediaRepository: Repository<MediaEntity>
  ) {}

  async find(): Promise<MediaEntity[]> {
    return await this.mediaRepository.find();
  }

  async findOne(id: number): Promise<MediaEntity> {
    return await this.mediaRepository.findOne(id);
  }
}
