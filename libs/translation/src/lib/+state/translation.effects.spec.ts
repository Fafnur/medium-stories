import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { cold, getTestScheduler, hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { languageEnStub, translationConfigStub, translationErrorStub } from '../../testing';
import { TranslationService } from '../interfaces/translation-service.interface';
import { fromTranslationActions } from './translation.actions';
import { TranslationEffects } from './translation.effects';
import { initialState, TRANSLATION_FEATURE_KEY, TranslationPartialState, translationReducer } from './translation.reducer';

describe('TranslationEffects', () => {
  let actions$: Observable<any>;
  let effects: TranslationEffects;
  let service: TranslationService;
  let scheduler: TestScheduler;
  let store: Store<TranslationPartialState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot(
          { [TRANSLATION_FEATURE_KEY]: translationReducer },
          {
            initialState: { [TRANSLATION_FEATURE_KEY]: initialState },
            runtimeChecks: { strictActionImmutability: false }
          }
        ),
        EffectsModule.forRoot([])
      ],
      providers: [
        TranslationEffects,
        DataPersistence,
        provideMockActions(() => actions$),
        {
          provide: TranslationService,
          useValue: {
            init: jest.fn(),
            getConfig: jest.fn(),
            setLanguage: jest.fn()
          }
        }
      ]
    });

    store = TestBed.inject(Store);
    effects = TestBed.inject(TranslationEffects);
    scheduler = getTestScheduler();
    const duration = scheduler.createTime('-|');
    effects.setRetryStrategyOptions({
      maxRetryAttempts: 3,
      scalingDuration: duration,
      scheduler
    });
    service = TestBed.inject(TranslationService);
  });

  describe('init$', () => {
    it('should return initiating translation', () => {
      const action = new fromTranslationActions.InitTranslation();
      const completion = new fromTranslationActions.InitiatingTranslation();

      actions$ = hot('^-a--', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.init$).toBeObservable(expected);
    });

    it('should return translation init canceled', () => {
      store.dispatch(new fromTranslationActions.InitiatingTranslation());
      const action = new fromTranslationActions.InitTranslation();
      const completion = new fromTranslationActions.TranslationInitCanceled();

      actions$ = hot('^-a--', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('initiating$', () => {
    it('should return translation initialized', () => {
      const action = new fromTranslationActions.InitiatingTranslation();
      const completion = new fromTranslationActions.TranslationInitialized(translationConfigStub);

      actions$ = hot('^-a--', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('---b', { b: completion });
      service.getConfig = jest.fn(() => translationConfigStub);
      service.init = jest.fn(() => response);

      expect(effects.initiating$).toBeObservable(expected);
    });

    it('should return translation init error', () => {
      const action = new fromTranslationActions.InitiatingTranslation();
      const completion = new fromTranslationActions.TranslationInitError(translationErrorStub);

      actions$ = hot('^-a---', { a: action });
      const response = cold('-#|', {}, translationErrorStub);
      const expected = cold('---b', { b: completion });
      service.getConfig = jest.fn(() => translationConfigStub);
      service.init = jest.fn(() => response);

      expect(effects.initiating$).toBeObservable(expected);
    });
  });

  describe('set$', () => {
    it('should return set language', () => {
      store.dispatch(new fromTranslationActions.TranslationInitialized(translationConfigStub));
      const action = new fromTranslationActions.SetLanguage(languageEnStub);
      const completion = new fromTranslationActions.SettingLanguage(languageEnStub);

      actions$ = hot('^-a--', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.set$).toBeObservable(expected);
    });

    it('should return language set canceled', () => {
      store.dispatch(new fromTranslationActions.TranslationInitialized(translationConfigStub));
      store.dispatch(new fromTranslationActions.SettingLanguage(languageEnStub));
      const action = new fromTranslationActions.SetLanguage(languageEnStub);
      const completion = new fromTranslationActions.LanguageSetCanceled();

      actions$ = hot('^-a--', { a: action });
      const expected = cold('--b', { b: completion });

      expect(effects.set$).toBeObservable(expected);
    });
  });

  describe('setting$', () => {
    it('should return language set', () => {
      store.dispatch(new fromTranslationActions.TranslationInitialized(translationConfigStub));
      const action = new fromTranslationActions.SettingLanguage(languageEnStub);
      const completion = new fromTranslationActions.LanguageSet();

      actions$ = hot('^-a--', { a: action });
      const response = cold('-a|', { a: null });
      const expected = cold('---b', { b: completion });
      service.setLanguage = jest.fn(() => response);

      expect(effects.setting$).toBeObservable(expected);
    });

    it('should return translation save error', () => {
      store.dispatch(new fromTranslationActions.TranslationInitialized(translationConfigStub));
      const action = new fromTranslationActions.SettingLanguage(languageEnStub);
      const completion = new fromTranslationActions.LanguageSetError(translationErrorStub);

      actions$ = hot('^-a---', { a: action });
      const response = cold('-#|', {}, translationErrorStub);
      const expected = cold('---b', { b: completion });
      service.setLanguage = jest.fn(() => response);

      expect(effects.setting$).toBeObservable(expected);
    });
  });
});
