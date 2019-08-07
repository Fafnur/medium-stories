import { Entity, TranslationState } from './translation.reducer';
import { translationQuery } from './translation.selectors';

describe('Translation Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTranslationId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createTranslation = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      translation: {
        list: [createTranslation('PRODUCT-AAA'), createTranslation('PRODUCT-BBB'), createTranslation('PRODUCT-CCC')],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Translation Selectors', () => {
    it('getAllTranslation() should return the list of Translation', () => {
      const results = translationQuery.getAllTranslation(storeState);
      const selId = getTranslationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedTranslation() should return the selected Entity', () => {
      const result = translationQuery.getSelectedTranslation(storeState);
      const selId = getTranslationId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = translationQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = translationQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
