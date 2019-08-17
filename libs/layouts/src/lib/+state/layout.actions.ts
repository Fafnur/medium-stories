import { Action } from '@ngrx/store';
import { Entity } from './layout.reducer';

export enum LayoutActionTypes {
  LoadLayout = '[Layout] Load Layout',
  LayoutLoaded = '[Layout] Layout Loaded',
  LayoutLoadError = '[Layout] Layout Load Error'
}

export class LoadLayout implements Action {
  readonly type = LayoutActionTypes.LoadLayout;
}

export class LayoutLoadError implements Action {
  readonly type = LayoutActionTypes.LayoutLoadError;
  constructor(public payload: any) {}
}

export class LayoutLoaded implements Action {
  readonly type = LayoutActionTypes.LayoutLoaded;
  constructor(public payload: Entity[]) {}
}

export type LayoutAction = LoadLayout | LayoutLoaded | LayoutLoadError;

export const fromLayoutActions = {
  LoadLayout,
  LayoutLoaded,
  LayoutLoadError
};
