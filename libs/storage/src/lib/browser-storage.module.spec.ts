import { async, TestBed } from '@angular/core/testing';

import { BrowserStorageModule } from './browser-storage.module';

describe('BrowserStorageModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [BrowserStorageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BrowserStorageModule).toBeTruthy();
  });
});
