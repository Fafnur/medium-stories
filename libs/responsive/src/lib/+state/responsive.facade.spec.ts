import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import { responsivePropertiesStub } from '../../testing';
import { ResponsiveService } from '../interfaces/responsive-service.interface';
import { ResponsiveEffects } from './responsive.effects';
import { ResponsiveFacade } from './responsive.facade';
import { responsiveInitialState, RESPONSIVE_FEATURE_KEY, ResponsivePartialState, responsiveReducer } from './responsive.reducer';

describe('ResponsiveFacade', () => {
  let facade: ResponsiveFacade;
  let store: Store<ResponsivePartialState>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(RESPONSIVE_FEATURE_KEY, responsiveReducer, { initialState: responsiveInitialState }),
          EffectsModule.forFeature([ResponsiveEffects])
        ],
        providers: [
          ResponsiveFacade,
          {
            provide: ResponsiveService,
            useValue: {
              getChangesByProperties: jest.fn(() => responsivePropertiesStub),
              getInitialProperties: jest.fn(() => responsivePropertiesStub)
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
      facade = TestBed.inject(ResponsiveFacade);
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
