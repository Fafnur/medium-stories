import { async, TestBed } from '@angular/core/testing';

import { UsersCoreModule } from './users-core.module';

describe('UsersCoreModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [UsersCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UsersCoreModule).toBeTruthy();
  });
});
