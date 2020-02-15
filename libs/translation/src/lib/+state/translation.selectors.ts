import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TRANSLATION_FEATURE_KEY, TranslationState } from './translation.reducer';

const getTranslationState = createFeatureSelector<TranslationState>(TRANSLATION_FEATURE_KEY);

const getCurrentLanguage = createSelector(getTranslationState, (state: TranslationState) => state.currentLanguage);

const getInitialized = createSelector(getTranslationState, (state: TranslationState) => state.initialized);

const getInitError = createSelector(getTranslationState, (state: TranslationState) => state.initError);

const getInitiating = createSelector(getTranslationState, (state: TranslationState) => state.initiating);

const getLanguage = createSelector(getTranslationState, (state: TranslationState) => state.language);

const getLanguages = createSelector(getTranslationState, (state: TranslationState) => state.languages);

const getSetError = createSelector(getTranslationState, (state: TranslationState) => state.setError);

const getSetting = createSelector(getTranslationState, (state: TranslationState) => state.setting);

export const translationQuery = {
  getCurrentLanguage,
  getInitialized,
  getInitError,
  getInitiating,
  getLanguage,
  getLanguages,
  getSetError,
  getSetting
};
