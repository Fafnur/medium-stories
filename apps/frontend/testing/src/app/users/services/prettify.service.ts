import { Injectable } from '@angular/core';

import { MultiplyService } from './multiply.service';

@Injectable()
export class PrettifyService {
  constructor(private multiplyService: MultiplyService) {}

  calc(a: number, b: number, suffix = 'Calc: ', postfix = ''): string {
    return `${suffix}${this.multiplyService.calc(a, b)}${postfix}`;
  }
}
