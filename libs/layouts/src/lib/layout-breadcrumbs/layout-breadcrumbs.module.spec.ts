import { async, TestBed } from '@angular/core/testing';

import { LayoutBreadcrumbsModule } from './layout-breadcrumbs.module';

describe('LayoutsCommonModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [LayoutBreadcrumbsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LayoutBreadcrumbsModule).toBeTruthy();
  });
});
