import { HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { ApiError } from './api.interface';

/**
 * Abstract API http service
 */
export abstract class ApiHttp {
  /**
   * Return http options
   *
   * @param queryParams Query params
   * @param headers Http headers
   */
  getOptions<T extends object = any>(
    queryParams: T,
    headers?: HttpHeaders
  ): {
    headers?: HttpHeaders | { [header: string]: string | string[] };
    params?: HttpParams | { [param: string]: string | string[] };
  } {
    let params = new HttpParams();
    for (const propKey of Object.keys(queryParams).sort()) {
      if (queryParams.hasOwnProperty(propKey) && queryParams[propKey] !== undefined) {
        if (Array.isArray(queryParams[propKey])) {
          queryParams[propKey].forEach(item => {
            params = params.append(`${propKey}[]`, item == null ? 'NULL' : item.toString());
          });
        } else {
          params = params.append(propKey, queryParams[propKey] == null ? 'NULL' : queryParams[propKey].toString());
        }
      }
    }

    return { headers: headers || new HttpHeaders(), params };
  }

  /**
   * Transform HttpError to ApiError
   *
   * @param error http error response
   */
  handleError<T = any>(error: HttpErrorResponse): Observable<ApiError<T>> {
    return throwError(error);
  }
}
