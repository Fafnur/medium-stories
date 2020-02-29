import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthInterceptor]
    }).compileComponents();
  }));

  beforeEach(() => {
    interceptor = TestBed.inject(AuthInterceptor);
  });

  it('should create an instance', () => {
    expect(interceptor).toBeTruthy();
  });
});
