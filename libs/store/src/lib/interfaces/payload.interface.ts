import { Action } from '@ngrx/store';

/**
 * Action force payload
 */
export interface ActionForcePayload {
  force?: boolean;
}

/**
 * Action effect payload
 */
export interface ActionEffectPayload<T = any> extends Action {
  payload: T;
}
