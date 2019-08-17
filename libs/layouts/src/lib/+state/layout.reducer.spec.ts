import { LayoutLoaded } from './layout.actions';
import { LayoutState, Entity, layoutInitialState, layoutReducer } from './layout.reducer';

describe('Layout Reducer', () => {
  const getLayoutId = it => it['id'];
  let createLayout;

  beforeEach(() => {
    createLayout = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Layout actions ', () => {
    it('should return set the list of known Layout', () => {
      const layouts = [createLayout('PRODUCT-AAA'), createLayout('PRODUCT-zzz')];
      const action = new LayoutLoaded(layouts);
      const result: LayoutState = layoutReducer(layoutInitialState, action);
      const selId: string = getLayoutId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = layoutReducer(layoutInitialState, action);

      expect(result).toBe(layoutInitialState);
    });
  });
});
