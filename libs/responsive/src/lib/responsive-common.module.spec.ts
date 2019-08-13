import { async, TestBed } from '@angular/core/testing';

import { ResponsiveCommonModule } from './responsive-common.module';

describe('ResponsiveCommonModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [ResponsiveCommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ResponsiveCommonModule).toBeTruthy();
  });
});
