import { Entity, LayoutState } from './layout.reducer';
import { layoutQuery } from './layout.selectors';

describe('Layout Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLayoutId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createLayout = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      layout: {
        list: [createLayout('PRODUCT-AAA'), createLayout('PRODUCT-BBB'), createLayout('PRODUCT-CCC')],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Layout Selectors', () => {
    it('getAllLayout() should return the list of Layout', () => {
      const results = layoutQuery.getAllLayout(storeState);
      const selId = getLayoutId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedLayout() should return the selected Entity', () => {
      const result = layoutQuery.getSelectedLayout(storeState);
      const selId = getLayoutId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = layoutQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = layoutQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
