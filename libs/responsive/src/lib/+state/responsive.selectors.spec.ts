import { Entity, ResponsiveState } from './responsive.reducer';
import { responsiveQuery } from './responsive.selectors';

describe('Responsive Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getResponsiveId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createResponsive = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      responsive: {
        list: [createResponsive('PRODUCT-AAA'), createResponsive('PRODUCT-BBB'), createResponsive('PRODUCT-CCC')],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Responsive Selectors', () => {
    it('getAllResponsive() should return the list of Responsive', () => {
      const results = responsiveQuery.getAllResponsive(storeState);
      const selId = getResponsiveId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedResponsive() should return the selected Entity', () => {
      const result = responsiveQuery.getSelectedResponsive(storeState);
      const selId = getResponsiveId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = responsiveQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = responsiveQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
