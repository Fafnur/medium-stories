import { createStore } from '@medium-stories/store/testing';

import { LAYOUT_FEATURE_KEY, layoutInitialState, LayoutPartialState } from './layout.reducer';
import { layoutQuery } from './layout.selectors';

describe('LayoutSelectors', () => {
  const key = LAYOUT_FEATURE_KEY;
  let store: LayoutPartialState;

  beforeEach(() => {
    store = createStore(key, layoutInitialState);
  });

  it('getOpenedSideMenu() should return openedSideMenu', () => {
    store = createStore(key, layoutInitialState, { openedSideMenu: true });
    const results = layoutQuery.getOpenedSideMenu(store);

    expect(results).toBeTruthy();
  });
});
