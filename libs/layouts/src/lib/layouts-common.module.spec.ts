import { async, TestBed } from '@angular/core/testing';

import { LayoutsCommonModule } from './layouts-common.module';

describe('LayoutsCommonModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [LayoutsCommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutsCommonModule).toBeTruthy();
  });
});
