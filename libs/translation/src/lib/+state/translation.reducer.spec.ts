import { createState } from '@medium-stories/store/testing';

import { languageEnStub, translationConfigStub, translationErrorStub } from '../../testing';
import { fromTranslationActions } from './translation.actions';
import { initialState, translationReducer, TranslationState } from './translation.reducer';

describe('TranslationReducer', () => {
  let state: TranslationState;

  beforeEach(() => {
    state = initialState;
  });

  describe('valid Translation actions ', () => {
    it('InitiatingTranslation() should set initError null and initiating true', () => {
      const action = new fromTranslationActions.InitiatingTranslation();
      const result = translationReducer(state, action);

      expect(result.initError).toBeNull();
      expect(result.initiating).toBeTruthy();
    });

    it('TranslationInitialized() should set initiating false and set translation config', () => {
      state = createState(initialState, { initiating: true });
      const action = new fromTranslationActions.TranslationInitialized(translationConfigStub);
      const result = translationReducer(state, action);

      expect(result.currentLanguage).toBe(translationConfigStub.currentLanguage);
      expect(result.language).toBe(translationConfigStub.language);
      expect(result.languages.length).toBe(translationConfigStub.languages.length);
      expect(result.initiating).toBeFalsy();
    });

    it('TranslationInitError() should set initError and initiating false', () => {
      state = createState(initialState, { initiating: true });
      const action = new fromTranslationActions.TranslationInitError(translationErrorStub);
      const result = translationReducer(state, action);

      expect(result.initError).toBe(translationErrorStub);
      expect(result.initiating).toBeFalsy();
    });

    it('SettingLanguage() should set setError null, currentLanguage = lang and setting true', () => {
      const action = new fromTranslationActions.SettingLanguage(languageEnStub);
      const result = translationReducer(state, action);

      expect(result.currentLanguage).toBe(languageEnStub);
      expect(result.setError).toBeNull();
      expect(result.setting).toBeTruthy();
    });

    it('LanguageSet() should set setting false', () => {
      state = createState(initialState, { setting: true });
      const action = new fromTranslationActions.LanguageSet();
      const result = translationReducer(state, action);

      expect(result.setting).toBeFalsy();
    });

    it('LanguageSetError() should set setError and setting false', () => {
      state = createState(initialState, { setting: true });
      const action = new fromTranslationActions.LanguageSetError(translationErrorStub);
      const result = translationReducer(state, action);

      expect(result.setError).toBe(translationErrorStub);
      expect(result.setting).toBeFalsy();
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = translationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
