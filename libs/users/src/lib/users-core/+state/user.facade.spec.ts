import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { UserEntity } from './user.models';
import { UserEffects } from './user.effects';
import { UserFacade } from './user.facade';

import * as UserSelectors from './user.selectors';
import * as UserActions from './user.actions';
import { USER_FEATURE_KEY, UserState, userInitialState, reducer } from './user.reducer';

interface TestSchema {
  user: UserState;
}

describe('UserFacade', () => {
  let facade: UserFacade;
  let store: Store<TestSchema>;
  const createUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as UserEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(USER_FEATURE_KEY, reducer), EffectsModule.forFeature([UserEffects])],
        providers: [UserFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(UserFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allUser$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(UserActions.loadUser());

        list = await readFirst(facade.allUser$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadUserSuccess` to manually update list
     */
    it('allUser$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allUser$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          UserActions.loadUserSuccess({
            user: [createUserEntity('AAA'), createUserEntity('BBB')]
          })
        );

        list = await readFirst(facade.allUser$);
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
