import { TestBed } from '@angular/core/testing';
import { UserApollo } from '@medium-stories/users';
import { userStub } from '@medium-stories/users/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as UserActions from './user.actions';
import { UserEffects } from './user.effects';

describe('UserEffects', () => {
  let actions: Observable<any>;
  let apollo: UserApollo;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UserEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
        {
          provide: UserApollo,
          useValue: {}
        }
      ]
    });

    effects = TestBed.inject(UserEffects);
    apollo = TestBed.inject(UserApollo);
  });

  describe('loadUser$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UserActions.loadUser({ payload: {} }) });
      const expected = hot('-a-|', { a: UserActions.loadUserSuccess({ payload: userStub }) });
      apollo.loadUser = jest.fn(() => hot('-a-|', { a: userStub }));

      expect(effects.loadUser$).toBeObservable(expected);
    });
  });
});
