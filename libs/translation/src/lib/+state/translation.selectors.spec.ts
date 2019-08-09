import { createStore } from '@medium-stories/store/testing';

import { languageEnStub, languagesStub, translationErrorStub } from '../../testing';
import { initialState, TRANSLATION_FEATURE_KEY, TranslationPartialState } from './translation.reducer';
import { translationQuery } from './translation.selectors';

describe('TranslationSelectors', () => {
  const KEY = TRANSLATION_FEATURE_KEY;

  let store: TranslationPartialState;

  beforeEach(() => {
    store = createStore(KEY, initialState);
  });

  describe('Translation Selectors', () => {
    it('getCurrentLanguage() should return current language', () => {
      store = createStore(KEY, initialState, { currentLanguage: languageEnStub });
      const results = translationQuery.getCurrentLanguage(store);

      expect(results).toBe(languageEnStub);
    });

    it('getInitialized() should return initialized', () => {
      store = createStore(KEY, initialState, { initialized: true });
      const results = translationQuery.getInitialized(store);

      expect(results).toBeTruthy();
    });

    it('getInitError() should return initError', () => {
      store = createStore(KEY, initialState, { initError: translationErrorStub });
      const results = translationQuery.getInitError(store);

      expect(results).toBe(translationErrorStub);
    });

    it('getInitiating() should return initiating', () => {
      store = createStore(KEY, initialState, { initiating: true });
      const results = translationQuery.getInitiating(store);

      expect(results).toBeTruthy();
    });

    it('getLanguage() should return language', () => {
      store = createStore(KEY, initialState, { language: languageEnStub });
      const results = translationQuery.getLanguage(store);

      expect(results).toBe(languageEnStub);
    });

    it('getLanguages() should return languages', () => {
      store = createStore(KEY, initialState, { languages: languagesStub });
      const results = translationQuery.getLanguages(store);

      expect(results.length).toBe(languagesStub.length);
    });

    it('getSetError() should return setError', () => {
      store = createStore(KEY, initialState, { setError: translationErrorStub });
      const results = translationQuery.getSetError(store);

      expect(results).toBe(translationErrorStub);
    });

    it('getSetting() should return setting', () => {
      store = createStore(KEY, initialState, { setting: true });
      const results = translationQuery.getSetting(store);

      expect(results).toBeTruthy();
    });
  });
});
