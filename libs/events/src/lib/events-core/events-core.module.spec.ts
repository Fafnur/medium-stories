import { async, TestBed } from '@angular/core/testing';

import { EventsCoreModule } from './events-core.module';

describe('EventsCoreModule', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [EventsCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EventsCoreModule).toBeTruthy();
  });
});
