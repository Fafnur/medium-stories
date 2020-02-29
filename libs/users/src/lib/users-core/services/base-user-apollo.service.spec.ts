import { async, TestBed } from '@angular/core/testing';

import { EventApollo } from '../interfaces/event-apollo.interface';
import { BaseUserApollo } from './base-user-apollo.service';

/**
 * TODO: Add tests
 */
describe('BaseEventApollo', () => {
  let service: EventApollo;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: EventApollo,
          useClass: BaseUserApollo
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(EventApollo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
