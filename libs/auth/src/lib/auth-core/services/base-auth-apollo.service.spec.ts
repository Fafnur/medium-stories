import { async, TestBed } from '@angular/core/testing';

import { AuthApollo } from '../interfaces/auth-apollo.interface';
import { BaseAuthApollo } from './base-auth-apollo.service';

/**
 * TODO: Add tests
 */
describe('BaseEventApollo', () => {
  let service: AuthApollo;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthApollo,
          useClass: BaseAuthApollo
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(AuthApollo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
