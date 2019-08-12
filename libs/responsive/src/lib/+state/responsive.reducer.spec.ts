import { ResponsiveLoaded } from './responsive.actions';
import { ResponsiveState, Entity, initialState, responsiveReducer } from './responsive.reducer';

describe('Responsive Reducer', () => {
  const getResponsiveId = it => it['id'];
  let createResponsive;

  beforeEach(() => {
    createResponsive = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Responsive actions ', () => {
    it('should return set the list of known Responsive', () => {
      const responsives = [createResponsive('PRODUCT-AAA'), createResponsive('PRODUCT-zzz')];
      const action = new ResponsiveLoaded(responsives);
      const result: ResponsiveState = responsiveReducer(initialState, action);
      const selId: string = getResponsiveId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = responsiveReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
