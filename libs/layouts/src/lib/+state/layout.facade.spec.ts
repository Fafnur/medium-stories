import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { LayoutEffects } from './layout.effects';
import { LayoutFacade } from './layout.facade';

import { layoutQuery } from './layout.selectors';
import { LoadLayout, LayoutLoaded } from './layout.actions';
import { LayoutState, Entity, layoutInitialState, layoutReducer } from './layout.reducer';

interface TestSchema {
  layout: LayoutState;
}

describe('LayoutFacade', () => {
  let facade: LayoutFacade;
  let store: Store<TestSchema>;
  let createLayout;

  beforeEach(() => {
    createLayout = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('layout', layoutReducer, { initialState: layoutInitialState }),
          EffectsModule.forFeature([LayoutEffects])
        ],
        providers: [LayoutFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(LayoutFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allLayout$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allLayout$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `LayoutLoaded` to manually submit list for state management
     */
    it('allLayout$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allLayout$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new LayoutLoaded([createLayout('AAA'), createLayout('BBB')]));

        list = await readFirst(facade.allLayout$);
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
