import { isPlatformBrowser } from '@angular/common';
import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

import { DEFAULT_GENERIC_RETRY_STRATEGY, GenericRetryStrategyOptions } from '../utils/generic-retry-strategy.util';
import { md5 } from '../utils/md5.util';

/**
 * Abstract Effects
 */
export abstract class AbstractEffects<T = any> {
  /**
   * Generic retry strategy options
   */
  protected genericRetryStrategyOptions = DEFAULT_GENERIC_RETRY_STRATEGY;

  protected constructor(protected readonly key: string) {}

  protected platformId: any;

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /**
   * Return effect id by payload
   * @param payload payload
   */
  getIdByPayload(payload: any): string {
    return md5(JSON.stringify(payload));
  }

  /**
   * Return state from "partial" store
   * @param state State
   * @param key External state key
   */
  getState<S = T>(state: any, key?: string): S {
    return state[key || this.key];
  }

  /**
   * Set generic retry strategy options
   * Notice: Required only for testing
   *
   * @param options options
   */
  setRetryStrategyOptions(options: Partial<GenericRetryStrategyOptions>): void {
    this.genericRetryStrategyOptions = { ...this.genericRetryStrategyOptions, ...options };
  }

  /**
   * Effect error handler
   * @param action Action
   * @param error Error
   * @param responseAction Response action
   * @param debug Debug
   */
  errorHandler(action: Action, error: object = {}, responseAction?: (error?: any) => TypedAction<any>, debug = false): Action | never {
    if (debug) {
      console.error(error);
    }

    if (responseAction) {
      return responseAction({ error });
    }
  }
}
