import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

/**
 * Create store
 *
 * @param key State feature key
 * @param initialState Initial state
 * @param params Extend initial params
 */
export function createStore<S = object, P = object>(key: string, initialState: S, params: Partial<S> = {}): P {
  return {
    [key]: { ...initialState, ...params }
  } as any;
}

/**
 * Create state
 *
 * @param initialState Initial state
 * @param params Extend initial params
 */
export function createState<S = object>(initialState: S, params: Partial<S> = {}): S {
  return { ...initialState, ...params };
}

/**
 * Set mock state
 * @param store Mock store
 * @param key State feature key
 * @param initialState Initial state
 * @param params Extend initial params
 */
export function setMockStore<S = object, P = object>(store: Store, key: string, initialState: S, params: Partial<S> = {}): void {
  (store as MockStore).setState(createStore(key, initialState, params));
}
