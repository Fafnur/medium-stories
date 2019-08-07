import { Action } from '@ngrx/store';
import { Entity } from './translation.reducer';

export enum TranslationActionTypes {
  LoadTranslation = '[Translation] Load Translation',
  TranslationLoaded = '[Translation] Translation Loaded',
  TranslationLoadError = '[Translation] Translation Load Error'
}

export class LoadTranslation implements Action {
  readonly type = TranslationActionTypes.LoadTranslation;
}

export class TranslationLoadError implements Action {
  readonly type = TranslationActionTypes.TranslationLoadError;
  constructor(public payload: any) {}
}

export class TranslationLoaded implements Action {
  readonly type = TranslationActionTypes.TranslationLoaded;
  constructor(public payload: Entity[]) {}
}

export type TranslationAction = LoadTranslation | TranslationLoaded | TranslationLoadError;

export const fromTranslationActions = {
  LoadTranslation,
  TranslationLoaded,
  TranslationLoadError
};
