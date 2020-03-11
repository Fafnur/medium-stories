import * as UserActions from './user.actions';
import { reducer, userInitialState, UserState } from './user.reducer';

describe('User Reducer', () => {
  let state: UserState;

  beforeEach(() => {
    state = userInitialState;
  });

  describe('valid User actions', () => {
    it('loadUserSuccess should return set the list of known User', () => {
      const action = UserActions.loadUserRun();
      const result = reducer(state, action);

      expect(result.userLoadError).toBeNull();
      expect(result.userLoadRun).toBeTruthy();
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
