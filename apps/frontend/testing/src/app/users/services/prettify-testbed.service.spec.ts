import { TestBed } from '@angular/core/testing';

import { MultiplyService } from './multiply.service';
import { PrettifyService } from './prettify.service';

describe('PrettifyTestBedService', () => {
  let prettify: PrettifyService;
  let multiply: MultiplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MultiplyService, PrettifyService] });
    multiply = TestBed.inject(MultiplyService);
    prettify = TestBed.inject(PrettifyService);
  });

  it('calc() should return 6', () => {
    expect(prettify.calc(3, 3, '', '')).toBe('9');
  });
});
