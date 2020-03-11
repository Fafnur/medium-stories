import { Injectable } from '@angular/core';

@Injectable()
export class SimpleService {
  get(): number {
    return 1;
  }
}
