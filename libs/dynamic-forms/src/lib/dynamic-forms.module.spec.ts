import { async, TestBed } from '@angular/core/testing';

import { DynamicFormsModule } from './dynamic-forms.module';

describe('DynamicFormsModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [DynamicFormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DynamicFormsModule).toBeTruthy();
  });
});
