import { Inject, Pipe, PipeTransform } from '@angular/core';

import { API_SOURCES } from '@medium-stories/common';

@Pipe({
  name: 'path'
})
export class PathPipe implements PipeTransform {
  constructor(@Inject(API_SOURCES) private apiSources: string) {}

  transform(path: string, prefix: string = '', postfix: string = ''): string {
    return `${this.apiSources}/${path}`;
  }
}
