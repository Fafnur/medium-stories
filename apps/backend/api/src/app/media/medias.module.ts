import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MediaEntity } from './entities/media.entity';
import { MediaResolver } from './resolvers/media.resolver';
import { MediaService } from './services/media.service';

@Module({
  imports: [TypeOrmModule.forFeature([MediaEntity])],
  providers: [MediaService, MediaResolver],
  exports: [MediaService]
})
export class MediasModule {}
