import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { cold, hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import { apolloErrorStub } from '@medium-stories/common/testing';
import { actionPropsForcePayloadStub, setMockStore } from '@medium-stories/store/testing';
import { UserApollo } from '@medium-stories/users';

import { userStub } from '../../../testing';
import * as UserActions from './user.actions';
import { UserEffects } from './user.effects';
import { userInitialState, USER_FEATURE_KEY } from './user.reducer';

describe('UserEffects', () => {
  let actions: Observable<any>;
  let apollo: UserApollo;
  let effects: UserEffects;
  let store: Store;
  const key = USER_FEATURE_KEY;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UserEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: { [key]: userInitialState }
        }),
        {
          provide: UserApollo,
          useValue: {}
        }
      ]
    });

    effects = TestBed.inject(UserEffects);
    apollo = TestBed.inject(UserApollo);
    store = TestBed.inject(Store);
  });

  describe('loadUser$', () => {
    it('should call load user run', () => {
      actions = hot('-a-|', { a: UserActions.loadUser(actionPropsForcePayloadStub) });
      const expected = hot('-a-|', { a: UserActions.loadUserRun() });

      expect(effects.loadUser$).toBeObservable(expected);
    });

    it('should call load user cancel', () => {
      setMockStore(store, key, userInitialState, { userLoadRun: true });
      actions = hot('-a-|', { a: UserActions.loadUser(actionPropsForcePayloadStub) });
      const expected = hot('-a-|', { a: UserActions.loadUserCancel() });

      expect(effects.loadUser$).toBeObservable(expected);
    });
  });

  describe('loadUserRun$', () => {
    it('should call load user success', () => {
      actions = hot('-a-|', { a: UserActions.loadUserRun() });
      const response = cold('-a|', { a: userStub });
      const expected = hot('--a|', { a: UserActions.loadUserSuccess({ payload: userStub }) });
      apollo.loadUser = jest.fn(() => response);

      expect(effects.loadUserRun$).toBeObservable(expected);
    });

    it('should call load user error', () => {
      actions = hot('-a-|', { a: UserActions.loadUserRun() });
      const response = cold('-#|', {}, apolloErrorStub);
      const expected = hot('--a|', { a: UserActions.loadUserFailure({ payload: apolloErrorStub }) });
      apollo.loadUser = jest.fn(() => response);

      expect(effects.loadUserRun$).toBeObservable(expected);
    });
  });
});
