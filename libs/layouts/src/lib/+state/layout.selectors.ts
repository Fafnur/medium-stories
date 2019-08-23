import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LAYOUT_FEATURE_KEY, LayoutState } from './layout.reducer';

const getLayoutState = createFeatureSelector<LayoutState>(LAYOUT_FEATURE_KEY);

export const getMenu = createSelector(
  getLayoutState,
  (state: LayoutState) => state.menu
);

export const getHoveredNavItemByLevel = createSelector(
  getLayoutState,
  (state: LayoutState, props: { level: number }) => state.menu.hovered[props.level]
);

export const getOpenedSidebar = createSelector(
  getLayoutState,
  (state: LayoutState) => state.openedSidebar
);

export const getShowedSubmenu = createSelector(
  getLayoutState,
  (state: LayoutState) => state.menu.showedSubmenu
);

export const layoutQuery = {
  getMenu,
  getHoveredNavItemByLevel,
  getOpenedSidebar,
  getShowedSubmenu
};
