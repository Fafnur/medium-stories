import { createStore } from '@medium-stories/store/testing';

import { navMenuStub } from '../../testing';
import { LAYOUT_FEATURE_KEY, layoutInitialState, LayoutPartialState } from './layout.reducer';
import { layoutQuery } from './layout.selectors';

describe('LayoutSelectors', () => {
  const key = LAYOUT_FEATURE_KEY;
  let store: LayoutPartialState;

  beforeEach(() => {
    store = createStore(key, layoutInitialState);
  });

  it('getMenu() should return menu', () => {
    store = createStore(key, layoutInitialState, { menu: navMenuStub });
    const results = layoutQuery.getMenu(store);

    expect(results).toBe(navMenuStub);
  });

  it('getHoveredNavSubItem() should return hoveredNavSubItem', () => {
    const hoveredId = 2;
    store = createStore(key, layoutInitialState, { menu: { hovered: [hoveredId] } as any });
    const results = layoutQuery.getHoveredNavItemByLevel(store, { level: 0 });

    expect(results).toBe(hoveredId);
  });

  it('getOpenedSidebar() should return openedSideMenu', () => {
    store = createStore(key, layoutInitialState, { openedSidebar: true });
    const results = layoutQuery.getOpenedSidebar(store);

    expect(results).toBeTruthy();
  });

  it('getShowedSubmenu() should return showNavSubMenu', () => {
    store = createStore(key, layoutInitialState, { menu: { showedSubmenu: true } as any });
    const results = layoutQuery.getShowedSubmenu(store);

    expect(results).toBeTruthy();
  });
});
