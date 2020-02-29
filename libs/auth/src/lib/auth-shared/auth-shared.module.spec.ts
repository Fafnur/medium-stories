import { async, TestBed } from '@angular/core/testing';

import { AuthSharedModule } from './auth-shared.module';

describe('AuthSharedModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [AuthSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthSharedModule).toBeTruthy();
  });
});
