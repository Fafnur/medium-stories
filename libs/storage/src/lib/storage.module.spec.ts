import { async, TestBed } from '@angular/core/testing';

import { StorageModule } from './storage.module';

describe('StorageModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [StorageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StorageModule).toBeTruthy();
  });
});
