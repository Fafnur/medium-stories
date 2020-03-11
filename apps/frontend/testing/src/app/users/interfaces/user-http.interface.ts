import { Observable } from 'rxjs';

import { ApiError } from '@medium-stories/common';
import { User } from '@medium-stories/entities';

/**
 * User http service
 */
export abstract class UserHttp {
  /**
   * Return current user
   * @param queryParams Query params
   */
  abstract get(queryParams?: object): Observable<User | ApiError>;

  /**
   * Return Update current user
   * @param payload User payload
   * @param queryParams Query params
   */
  abstract update(payload: Partial<User>, queryParams?: object): Observable<User | ApiError>;
}
