import { Action } from '@ngrx/store';

import { TranslationConfig } from '../interfaces/translation-config.interface';

export enum TranslationActionTypes {
  InitTranslation = '[Translation] Init translation',
  TranslationInitCanceled = '[Translation] Translation init canceled',
  InitiatingTranslation = '[Translation] Initiating translation',
  TranslationInitialized = '[Translation] Translation initialized',
  TranslationInitError = '[Translation] Translation init error',

  SetLanguage = '[Translation] Set language',
  LanguageSetCanceled = '[Translation] Language set canceled',
  SettingLanguage = '[Translation] Setting language',
  LanguageSet = '[Translation] Language set',
  LanguageSetError = '[Translation] Language set error'
}

export class InitTranslation implements Action {
  readonly type = TranslationActionTypes.InitTranslation;

  constructor(public payload?: boolean) {}
}

export class TranslationInitCanceled implements Action {
  readonly type = TranslationActionTypes.TranslationInitCanceled;
}

export class InitiatingTranslation implements Action {
  readonly type = TranslationActionTypes.InitiatingTranslation;
}

export class TranslationInitialized implements Action {
  readonly type = TranslationActionTypes.TranslationInitialized;
  constructor(public payload: TranslationConfig) {}
}

export class TranslationInitError implements Action {
  readonly type = TranslationActionTypes.TranslationInitError;
  constructor(public payload: string) {}
}

export class SetLanguage implements Action {
  readonly type = TranslationActionTypes.SetLanguage;
  constructor(public payload: string, public force?: boolean) {}
}

export class LanguageSetCanceled implements Action {
  readonly type = TranslationActionTypes.LanguageSetCanceled;
}

export class SettingLanguage implements Action {
  readonly type = TranslationActionTypes.SettingLanguage;
  constructor(public payload: string) {}
}

export class LanguageSet implements Action {
  readonly type = TranslationActionTypes.LanguageSet;
}

export class LanguageSetError implements Action {
  readonly type = TranslationActionTypes.LanguageSetError;
  constructor(public payload: string) {}
}

export type TranslationAction =
  | InitTranslation
  | TranslationInitCanceled
  | InitiatingTranslation
  | TranslationInitialized
  | TranslationInitError
  | SetLanguage
  | LanguageSetCanceled
  | SettingLanguage
  | LanguageSet
  | LanguageSetError;

export const fromTranslationActions = {
  InitTranslation,
  TranslationInitCanceled,
  InitiatingTranslation,
  TranslationInitialized,
  TranslationInitError,
  SetLanguage,
  LanguageSetCanceled,
  SettingLanguage,
  LanguageSet,
  LanguageSetError
};
