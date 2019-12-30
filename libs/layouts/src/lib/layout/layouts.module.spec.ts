import { async, TestBed } from '@angular/core/testing';

import { LayoutsModule } from './layouts.module';

describe('LayoutsModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [LayoutsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutsModule).toBeTruthy();
  });
});
