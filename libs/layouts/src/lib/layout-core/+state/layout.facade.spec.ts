import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import { LayoutEffects } from './layout.effects';
import { LayoutFacade } from './layout.facade';
import { layoutReducer, LayoutPartialState, LAYOUT_FEATURE_KEY, layoutInitialState } from './layout.reducer';

describe('LayoutFacade', () => {
  let facade: LayoutFacade;
  let store: Store<LayoutPartialState>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(LAYOUT_FEATURE_KEY, layoutReducer, { initialState: layoutInitialState }),
          EffectsModule.forFeature([LayoutEffects])
        ],
        providers: [LayoutFacade]
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
      facade = TestBed.inject(LayoutFacade);
    });

    it('should create', () => {
      expect(facade).toBeTruthy();
    });

    it('toggleMenu() should toggle menu', async done => {
      try {
        let openedSideMenu = await readFirst(facade.openedSidebar$);
        expect(openedSideMenu).toBeFalsy();

        facade.toggleSidebar();
        openedSideMenu = await readFirst(facade.openedSidebar$);
        expect(openedSideMenu).toBeTruthy();

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
