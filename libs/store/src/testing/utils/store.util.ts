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
