import { createStore } from '@medium-stories/store/testing';

import { hoveredNavItemStub, hoveredNavSubItemStub } from '../../testing';
import { LAYOUT_FEATURE_KEY, layoutInitialState, LayoutPartialState } from './layout.reducer';
import { layoutQuery } from './layout.selectors';

describe('LayoutSelectors', () => {
  const key = LAYOUT_FEATURE_KEY;
  let store: LayoutPartialState;

  beforeEach(() => {
    store = createStore(key, layoutInitialState);
  });

  it('getHoveredNavItem() should return hoveredNavItem', () => {
    store = createStore(key, layoutInitialState, { hoveredNavItem: hoveredNavItemStub });
    const results = layoutQuery.getHoveredNavItem(store);

    expect(results).toBe(hoveredNavItemStub);
  });

  it('getHoveredNavSubItem() should return hoveredNavSubItem', () => {
    store = createStore(key, layoutInitialState, { hoveredNavSubItem: hoveredNavSubItemStub });
    const results = layoutQuery.getHoveredNavSubItem(store);

    expect(results).toBe(hoveredNavSubItemStub);
  });

  it('getOpenedSideMenu() should return openedSideMenu', () => {
    store = createStore(key, layoutInitialState, { openedSideMenu: true });
    const results = layoutQuery.getOpenedSideMenu(store);

    expect(results).toBeTruthy();
  });

  it('getShowNavSubMenu() should return showNavSubMenu', () => {
    store = createStore(key, layoutInitialState, { showNavSubMenu: true });
    const results = layoutQuery.getShowNavSubMenu(store);

    expect(results).toBeTruthy();
  });
});
