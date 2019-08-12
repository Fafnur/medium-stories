import { async, TestBed } from '@angular/core/testing';

import { ResponsiveModule } from './responsive.module';

describe('ResponsiveModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [ResponsiveModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ResponsiveModule).toBeTruthy();
  });
});
