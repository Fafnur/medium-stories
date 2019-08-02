import { async, TestBed } from '@angular/core/testing';

import { ServerStorageModule } from './server-storage.module';

describe('ServerStorageModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [ServerStorageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ServerStorageModule).toBeTruthy();
  });
});
