import { Injectable } from '@angular/core';

@Injectable()
export class MultiplyService {
  calc(a: number, b: number): number {
    return a * b;
  }
}
