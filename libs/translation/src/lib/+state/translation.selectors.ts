import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TRANSLATION_FEATURE_KEY, TranslationState } from './translation.reducer';

// Lookup the 'Translation' feature state managed by NgRx
const getTranslationState = createFeatureSelector<TranslationState>(TRANSLATION_FEATURE_KEY);

const getLoaded = createSelector(
  getTranslationState,
  (state: TranslationState) => state.loaded
);
const getError = createSelector(
  getTranslationState,
  (state: TranslationState) => state.error
);

const getAllTranslation = createSelector(
  getTranslationState,
  getLoaded,
  (state: TranslationState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getTranslationState,
  (state: TranslationState) => state.selectedId
);
const getSelectedTranslation = createSelector(
  getAllTranslation,
  getSelectedId,
  (translation, id) => {
    const result = translation.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const translationQuery = {
  getLoaded,
  getError,
  getAllTranslation,
  getSelectedTranslation
};
