import { DEFAULT_GENERIC_RETRY_STRATEGY, GenericRetryStrategyOptions } from '../utils/generic-retry-strategy.util';

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
   * Return state from "partial" store
   * @param state State
   */
  getState<S = any>(state: S): T {
    return state[this.key];
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
