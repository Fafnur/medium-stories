import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Media } from '@medium-stories/entities';

import { MediaService } from '../services/media.service';

@Resolver('Media')
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query('medias')
  async getMedias(): Promise<Media[]> {
    return this.mediaService.find();
  }

  @Query('media')
  async getMedia(@Args('id') id: number): Promise<Media> {
    return this.mediaService.findOne(id);
  }

  @Mutation('singleUpload')
  async singleUpload(@Args('file') file: any) {
    const { stream, filename, mimetype, encoding } = await file;

    // 1. Validate file metadata.

    // 2. Stream file contents into cloud storage:
    // https://nodejs.org/api/stream.html

    // 3. Record the file upload in your DB.
    // const id = await recordFile( … )

    return { filename, mimetype, encoding };
  }
}
