import { async, TestBed } from '@angular/core/testing';

import { LayoutsCoreModule } from './layouts-core.module';

describe('LayoutsCommonModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [LayoutsCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutsCoreModule).toBeTruthy();
  });
});
