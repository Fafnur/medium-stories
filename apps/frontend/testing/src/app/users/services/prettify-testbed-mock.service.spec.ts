import { TestBed } from '@angular/core/testing';

import { MultiplyService } from './multiply.service';
import { PrettifyService } from './prettify.service';

describe('PrettifyTestBedMockService', () => {
  let prettify: PrettifyService;
  let multiply: MultiplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MultiplyService,
          useValue: {
            calc: jest.fn((a, b) => a * b)
          }
        },
        PrettifyService
      ]
    });
    multiply = TestBed.inject(MultiplyService);
    prettify = TestBed.inject(PrettifyService);
  });

  it('calc() should return 10', () => {
    expect(prettify.calc(2, 5, '', '')).toBe('10');
  });
});
