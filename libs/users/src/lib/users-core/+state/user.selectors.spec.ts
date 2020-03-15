import { apolloErrorStub } from '@medium-stories/common/testing';
import { createStore } from '@medium-stories/store/testing';

import { userStub } from '../../../testing';
import { USER_FEATURE_KEY, userInitialState, UserPartialState } from './user.reducer';
import * as UserSelectors from './user.selectors';

describe('UserSelectors', () => {
  let state: UserPartialState;
  const key = USER_FEATURE_KEY;

  beforeEach(() => {
    state = createStore(key, userInitialState);
  });

  describe('User Selectors', () => {
    it('getUser() should return user', () => {
      state = createStore(key, userInitialState, { user: userStub });
      const results = UserSelectors.getUser(state);

      expect(results).toBeTruthy();
    });

    it('getUserLoadRun() should return user load run', () => {
      state = createStore(key, userInitialState, { userLoadRun: true });
      const results = UserSelectors.getUserLoadRun(state);

      expect(results).toBeTruthy();
    });

    it('getUserLoadError() should return user load error', () => {
      state = createStore(key, userInitialState, { userLoadError: apolloErrorStub });
      const results = UserSelectors.getUserLoadError(state);

      expect(results).toEqual(apolloErrorStub);
    });
  });
});
