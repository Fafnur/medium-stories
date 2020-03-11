import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UserApollo } from '@medium-stories/users';
import { userStub } from '@medium-stories/users/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';

import { UserFacade } from '../interfaces/user-facade.interface';
import { UserEffects } from './user.effects';
import { BaseUserFacade } from './user.facade';
import { reducer, USER_FEATURE_KEY, UserPartialState } from './user.reducer';

describe('UserFacade', () => {
  let facade: UserFacade;
  let store: Store<UserPartialState>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(USER_FEATURE_KEY, reducer), EffectsModule.forFeature([UserEffects])],
        providers: [
          {
            provide: UserFacade,
            useClass: BaseUserFacade
          },
          {
            provide: UserApollo,
            useValue: {
              loadUser: of(userStub)
            }
          }
        ]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(UserFacade);
    });

    it('loadAll() should load user', async done => {
      try {
        let user = await readFirst(facade.user$);
        expect(user).toBeNull();

        facade.loadUser();
        user = await readFirst(facade.user$);
        expect(user).toEqual(userStub);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
