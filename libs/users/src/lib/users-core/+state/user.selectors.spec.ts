import { createStore } from '@medium-stories/store/testing';
import { USER_FEATURE_KEY, userInitialState, UserPartialState } from './user.reducer';
import * as UserSelectors from './user.selectors';

describe('User Selectors', () => {
  let state: UserPartialState;
  const key = USER_FEATURE_KEY;

  beforeEach(() => {
    state = createStore(key, userInitialState);
  });

  describe('User Selectors', () => {
    it('getAllUser() should return the list of User', () => {
      state = createStore(key, userInitialState, { userLoadRun: true });
      const results = UserSelectors.getUserLoadRun(state);

      expect(results).toBeTruthy();
    });
  });
});
