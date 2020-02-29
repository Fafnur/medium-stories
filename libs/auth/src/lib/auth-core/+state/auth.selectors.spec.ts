import { AuthEntity } from './auth.models';
import { State, authAdapter, authInitialState } from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

describe('Auth Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAuthId = it => it['id'];
  const createAuthEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AuthEntity);

  let state;

  beforeEach(() => {
    state = {
      auth: authAdapter.addAll([createAuthEntity('PRODUCT-AAA'), createAuthEntity('PRODUCT-BBB'), createAuthEntity('PRODUCT-CCC')], {
        ...authInitialState,
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      })
    };
  });

  describe('Auth Selectors', () => {
    it('getAllAuth() should return the list of Auth', () => {
      const results = AuthSelectors.getAllAuth(state);
      const selId = getAuthId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AuthSelectors.getSelected(state);
      const selId = getAuthId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getAuthLoaded() should return the current 'loaded' status", () => {
      const result = AuthSelectors.getAuthLoaded(state);

      expect(result).toBe(true);
    });

    it("getAuthError() should return the current 'error' state", () => {
      const result = AuthSelectors.getAuthError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
