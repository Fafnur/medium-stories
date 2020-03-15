import { apolloErrorStub } from '@medium-stories/common/testing';
import { userStub } from '@medium-stories/users/testing';

import * as UserActions from './user.actions';
import { reducer, userInitialState, UserState } from './user.reducer';

describe('UserReducer', () => {
  let state: UserState;

  beforeEach(() => {
    state = userInitialState;
  });

  describe('valid User actions', () => {
    it('loadUserRun() should set user load run true', () => {
      const action = UserActions.loadUserRun();
      const result = reducer(state, action);

      expect(result.userLoadError).toBeNull();
      expect(result.userLoadRun).toBeTruthy();
    });

    it('loadUserSuccess should set user and set user load run false', () => {
      const action = UserActions.loadUserSuccess({ payload: userStub });
      const result = reducer(state, action);

      expect(result.user).toEqual(userStub);
      expect(result.userLoadRun).toBeFalsy();
    });

    it('loadUserFailure should set user load erorr and set user load run false', () => {
      const action = UserActions.loadUserFailure({ payload: apolloErrorStub });
      const result = reducer(state, action);

      expect(result.userLoadError).toEqual(apolloErrorStub);
      expect(result.userLoadRun).toBeFalsy();
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(userInitialState, action);

      expect(result).toBe(userInitialState);
    });
  });
});
