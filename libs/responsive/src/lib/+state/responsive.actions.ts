import { Action } from '@ngrx/store';
import { Entity } from './responsive.reducer';

export enum ResponsiveActionTypes {
  LoadResponsive = '[Responsive] Load Responsive',
  ResponsiveLoaded = '[Responsive] Responsive Loaded',
  ResponsiveLoadError = '[Responsive] Responsive Load Error'
}

export class LoadResponsive implements Action {
  readonly type = ResponsiveActionTypes.LoadResponsive;
}

export class ResponsiveLoadError implements Action {
  readonly type = ResponsiveActionTypes.ResponsiveLoadError;
  constructor(public payload: any) {}
}

export class ResponsiveLoaded implements Action {
  readonly type = ResponsiveActionTypes.ResponsiveLoaded;
  constructor(public payload: Entity[]) {}
}

export type ResponsiveAction = LoadResponsive | ResponsiveLoaded | ResponsiveLoadError;

export const fromResponsiveActions = {
  LoadResponsive,
  ResponsiveLoaded,
  ResponsiveLoadError
};
