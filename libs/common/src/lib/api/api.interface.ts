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
