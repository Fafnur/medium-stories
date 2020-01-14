import { async, TestBed } from '@angular/core/testing';

import { DynamicFormsTypeheadModule } from './dynamic-forms-typehead.module';

describe('DynamicFormsTypeheadModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [DynamicFormsTypeheadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DynamicFormsTypeheadModule).toBeTruthy();
  });
});
