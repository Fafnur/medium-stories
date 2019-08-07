import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { TranslationEffects } from './translation.effects';
import { TranslationFacade } from './translation.facade';

import { translationQuery } from './translation.selectors';
import { LoadTranslation, TranslationLoaded } from './translation.actions';
import { TranslationState, Entity, initialState, reducer } from './translation.reducer';

interface TestSchema {
  translation: TranslationState;
}

describe('TranslationFacade', () => {
  let facade: TranslationFacade;
  let store: Store<TestSchema>;
  let createTranslation;

  beforeEach(() => {
    createTranslation = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature('translation', reducer, { initialState }), EffectsModule.forFeature([TranslationEffects])],
        providers: [TranslationFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(TranslationFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allTranslation$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allTranslation$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `TranslationLoaded` to manually submit list for state management
     */
    it('allTranslation$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allTranslation$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new TranslationLoaded([createTranslation('AAA'), createTranslation('BBB')]));

        list = await readFirst(facade.allTranslation$);
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
