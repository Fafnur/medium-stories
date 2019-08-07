import { TranslationAction, TranslationActionTypes } from './translation.actions';

export const TRANSLATION_FEATURE_KEY = 'translation';

export interface TranslationState {
  /**
   * Current language
   */
  currentLanguage: string;

  /**
   * Translation is initialized
   */
  initialized: boolean;

  /**
   * Translation init error
   */
  initError?: string;

  /**
   * Is initiating
   */
  initiating: boolean;

  /**
   * Default language
   */
  language: string;

  /**
   * Languages
   */
  languages: string[];

  /**
   * Set language error
   */
  setError?: string;

  /**
   * Is setting
   */
  setting: boolean;
}

export interface TranslationPartialState {
  readonly [TRANSLATION_FEATURE_KEY]: TranslationState;
}

export const initialState: TranslationState = {
  currentLanguage: null,
  initialized: false,
  initError: null,
  initiating: false,
  language: null,
  languages: null,
  setError: null,
  setting: false
};

export function translationReducer(state: TranslationState = initialState, action: TranslationAction): TranslationState {
  switch (action.type) {
    case TranslationActionTypes.InitiatingTranslation: {
      state = {
        ...state,
        initError: null,
        initiating: true
      };
      break;
    }
    case TranslationActionTypes.TranslationInitialized: {
      state = {
        ...state,
        ...action.payload,
        initialized: true,
        initiating: false
      };
      break;
    }
    case TranslationActionTypes.TranslationInitError: {
      state = {
        ...state,
        initError: action.payload,
        initialized: true,
        initiating: false
      };
      break;
    }

    case TranslationActionTypes.SettingLanguage: {
      state = {
        ...state,
        currentLanguage: action.payload,
        setError: null,
        setting: true
      };
      break;
    }
    case TranslationActionTypes.LanguageSet: {
      state = {
        ...state,
        setting: false
      };
      break;
    }
    case TranslationActionTypes.LanguageSetError: {
      state = {
        ...state,
        setError: action.payload,
        setting: false
      };
      break;
    }
  }

  return state;
}
