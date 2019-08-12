import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { ResponsiveEffects } from './responsive.effects';
import { ResponsiveFacade } from './responsive.facade';

import { responsiveQuery } from './responsive.selectors';
import { LoadResponsive, ResponsiveLoaded } from './responsive.actions';
import { ResponsiveState, Entity, initialState, responsiveReducer } from './responsive.reducer';

interface TestSchema {
  responsive: ResponsiveState;
}

describe('ResponsiveFacade', () => {
  let facade: ResponsiveFacade;
  let store: Store<TestSchema>;
  let createResponsive;

  beforeEach(() => {
    createResponsive = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature('responsive', responsiveReducer, { initialState }), EffectsModule.forFeature([ResponsiveEffects])],
        providers: [ResponsiveFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ResponsiveFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allResponsive$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allResponsive$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ResponsiveLoaded` to manually submit list for state management
     */
    it('allResponsive$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allResponsive$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new ResponsiveLoaded([createResponsive('AAA'), createResponsive('BBB')]));

        list = await readFirst(facade.allResponsive$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
