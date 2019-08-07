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
  getState<S = any>(state: S, key?: string): T {
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
}
