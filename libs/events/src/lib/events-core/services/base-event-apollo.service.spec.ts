import { async, TestBed } from '@angular/core/testing';

import { EventApollo } from '../interfaces/event-apollo.interface';
import { BaseEventApollo } from './base-event-apollo.service';

describe('BaseEventApollo', () => {
  let service: EventApollo;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: EventApollo,
          useClass: BaseEventApollo
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(EventApollo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
