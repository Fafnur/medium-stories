import { async, TestBed } from '@angular/core/testing';

import { RootStoreModule } from './root-store.module';

describe('RootStoreModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [RootStoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RootStoreModule).toBeTruthy();
  });
});
