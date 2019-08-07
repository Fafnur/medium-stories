import { Observable, SchedulerLike, throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export interface GenericRetryStrategyOptions {
  maxRetryAttempts?: number;
  scalingDuration?: number;
  excludedStatusCodes?: number[];
  scheduler?: SchedulerLike;
}

export const DEFAULT_GENERIC_RETRY_STRATEGY: GenericRetryStrategyOptions = {
  maxRetryAttempts: 3,
  scalingDuration: 1000,
  excludedStatusCodes: [403],
  scheduler: null
};

export const genericRetryStrategy = ({
  maxRetryAttempts = 3,
  scalingDuration = 1000,
  excludedStatusCodes = [403],
  scheduler = null
}: GenericRetryStrategyOptions = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      if (retryAttempt > maxRetryAttempts || excludedStatusCodes.find(e => e === error.status)) {
        return throwError(error);
      }

      return timer(retryAttempt * scalingDuration, scheduler);
    })
  );
};
