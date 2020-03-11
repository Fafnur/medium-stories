import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApiError, getHttpOptions } from '@medium-stories/common';
import { User } from '@medium-stories/entities';

import { UserHttp } from '../interfaces/user-http.interface';

export const userApiRoutes = {
  get: '/api/users/current',
  update: '/api/users/current'
};

@Injectable()
export class BaseUserHttp implements UserHttp {
  constructor(private httpClient: HttpClient) {}

  get(queryParams?: object): Observable<User | ApiError> {
    return this.httpClient.get<User>(userApiRoutes.get, getHttpOptions(queryParams)).pipe(catchError(error => throwError(error)));
  }

  update(payload: Partial<User>, queryParams?: object): Observable<User | ApiError> {
    return this.httpClient.put<{ currentUser: User; status: boolean }>(userApiRoutes.update, payload, getHttpOptions(queryParams)).pipe(
      map(response => response.currentUser),
      catchError(error => throwError(error))
    );
  }
}
