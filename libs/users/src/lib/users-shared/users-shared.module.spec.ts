import { async, TestBed } from '@angular/core/testing';

import { UsersSharedModule } from './users-shared.module';

describe('UsersSharedModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [UsersSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UsersSharedModule).toBeTruthy();
  });
});
