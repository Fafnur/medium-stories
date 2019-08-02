import { async, TestBed } from '@angular/core/testing';

import { CommonModule } from './common.module';

describe('CommonModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [CommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonModule).toBeTruthy();
  });
});
