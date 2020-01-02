import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * API Error
 */
export interface ApiError<T = any> {
  [p: string]: any;

  /**
   * Error message
   */
  message: string;

  /**
   * Error object
   */
  error?: T | null;
}

/**
 * API Response
 */
export type ApiResponse<T = any, E = any> = Observable<T | ApiError<E>>;

/**
 * Return http options
 *
 * @param queryParams Query params
 * @param headers Http headers
 */
export function getHttpOptions<T extends object = any>(
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
