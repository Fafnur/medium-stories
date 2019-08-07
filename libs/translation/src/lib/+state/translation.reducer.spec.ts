import { TranslationLoaded } from './translation.actions';
import { TranslationState, Entity, initialState, reducer } from './translation.reducer';

describe('Translation Reducer', () => {
  const getTranslationId = it => it['id'];
  let createTranslation;

  beforeEach(() => {
    createTranslation = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Translation actions ', () => {
    it('should return set the list of known Translation', () => {
      const translations = [createTranslation('PRODUCT-AAA'), createTranslation('PRODUCT-zzz')];
      const action = new TranslationLoaded(translations);
      const result: TranslationState = reducer(initialState, action);
      const selId: string = getTranslationId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
