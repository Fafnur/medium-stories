import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';

import { ApiError } from '@medium-stories/common';
import { userStub } from '@medium-stories/users/testing';

import { UserHttp } from '../interfaces/user-http.interface';
import { BaseUserHttp, userApiRoutes } from './user-http.service';

describe('BaseUserHttp', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: UserHttp;

  const apiErrorStub: ApiError = {
    error: 'Error: Unknown API Error',
    message: 'API Error'
  };

  const apiErrorResponseOptions = { status: 400, statusText: 'Bad Request' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: UserHttp,
          useClass: BaseUserHttp
        }
      ]
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserHttp);
  }));

  afterEach(async () => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('get()', () => {
    const path = userApiRoutes.get;

    it('should return current user', () => {
      service.get().subscribe(data => expect(data).toEqual(userStub));
      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('GET');

      req.flush(userStub);
    });

    it('should return user get api error', () => {
      service.get().subscribe(
        () => {},
        data => {
          expect(data.error).toEqual(apiErrorStub);
        }
      );

      const req = httpTestingController.expectOne(path);
      req.flush(apiErrorStub, apiErrorResponseOptions);
    });
  });

  describe('update()', () => {
    const path = userApiRoutes.update;
    const email = 'new@mail.ru';

    it('should update user email', () => {
      service.update({ email }).subscribe(user => {
        expect(user.email).toBe(email);
      });

      const req = httpTestingController.expectOne(path);
      expect(req.request.method).toEqual('PUT');

      req.flush({ currentUser: { ...userStub, email }, status: true });
    });

    it('should return user update api error', () => {
      service.update({ email }).subscribe(
        () => {},
        data => {
          expect(data.error).toEqual(apiErrorStub);
        }
      );

      const req = httpTestingController.expectOne(path);
      req.flush(apiErrorStub, apiErrorResponseOptions);
    });
  });
});
