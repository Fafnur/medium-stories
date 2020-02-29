import { TypedAction } from '@ngrx/store/src/models';

export type ActionPayload<T = object, A extends string = any> = T & TypedAction<A>;

/**
 * Action force payload
 */
export interface ActionForcePayload {
  force?: boolean;
}

/**
 * Action props payload
 */
export interface ActionPropsPayload<T = any> {
  payload: T;
}

/**
 * Action props payload
 */
export interface ActionPropsForcePayload {
  payload: {
    force?: boolean;
  };
}

/**
 * Action error payload
 */
export interface ActionErrorPayload<T = any> {
  error: T;
}
