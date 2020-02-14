import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';

import { translationConfigStub } from '../../testing';
import { TranslationService } from '../interfaces/translation-service.interface';
import { TranslationEffects } from './translation.effects';
import { TranslationFacade } from './translation.facade';
import { initialState, TRANSLATION_FEATURE_KEY, TranslationPartialState, translationReducer } from './translation.reducer';

describe('TranslationFacade', () => {
  let facade: TranslationFacade;
  let store: Store<TranslationPartialState>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TRANSLATION_FEATURE_KEY, translationReducer, { initialState }),
          EffectsModule.forFeature([TranslationEffects])
        ],
        providers: [
          TranslationFacade,
          {
            provide: TranslationService,
            useValue: {
              init: jest.fn(() => of(null)),
              getConfig: jest.fn(() => translationConfigStub),
              setLanguage: jest.fn(() => of(null))
            }
          }
        ]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot(
            {},
            {
              runtimeChecks: { strictActionImmutability: false }
            }
          ),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}

      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(TranslationFacade);
    });

    it('init() should initialized language on app', async done => {
      try {
        let initialized = await readFirst(facade.initialized$);
        expect(initialized).toBeFalsy();

        facade.init();
        initialized = await readFirst(facade.initialized$);
        expect(initialized).toBeTruthy();

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
