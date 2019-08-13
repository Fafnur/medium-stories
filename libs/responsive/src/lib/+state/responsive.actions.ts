import { Action } from '@ngrx/store';

import { ResponsiveProperties } from '../interfaces/responsive.interface';

export enum ResponsiveActionTypes {
  InitWindowProps = '[Responsive] Init window properties',
  WindowPropsInitCanceled = '[Responsive] Window properties inited',
  InitiatingWindowProps = '[Responsive] Initiating window properties',
  WindowPropsInitialized = '[Responsive] Window properties initialized',
  WindowPropsInitError = '[Responsive] Window properties init error',

  ChangeWindowProps = '[Responsive] Change window properties',
  SetWindowProps = '[Responsive] Set window properties'
}

export class InitWindowProps implements Action {
  readonly type = ResponsiveActionTypes.InitWindowProps;

  constructor(public payload?: boolean) {}
}

export class WindowPropsInitCanceled implements Action {
  readonly type = ResponsiveActionTypes.WindowPropsInitCanceled;
}

export class InitiatingWindowProps implements Action {
  readonly type = ResponsiveActionTypes.InitiatingWindowProps;
}

export class WindowPropsInitialized implements Action {
  readonly type = ResponsiveActionTypes.WindowPropsInitialized;

  constructor(public payload: ResponsiveProperties) {}
}

export class WindowPropsInitError implements Action {
  readonly type = ResponsiveActionTypes.WindowPropsInitError;

  constructor(public payload: string) {}
}

export class SetWindowProps implements Action {
  readonly type = ResponsiveActionTypes.SetWindowProps;

  constructor(public payload: object) {}
}

export type ResponsiveAction =
  | InitWindowProps
  | WindowPropsInitCanceled
  | InitiatingWindowProps
  | WindowPropsInitialized
  | WindowPropsInitError
  | SetWindowProps;

export const fromResponsiveActions = {
  InitWindowProps,
  WindowPropsInitCanceled,
  InitiatingWindowProps,
  WindowPropsInitialized,
  WindowPropsInitError,
  SetWindowProps
};
