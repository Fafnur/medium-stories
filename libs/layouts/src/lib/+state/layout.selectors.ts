import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LAYOUT_FEATURE_KEY, LayoutState } from './layout.reducer';

const getLayoutState = createFeatureSelector<LayoutState>(LAYOUT_FEATURE_KEY);

export const getHoveredNavItem = createSelector(
  getLayoutState,
  (state: LayoutState) => state.hoveredNavItem
);

export const getHoveredNavSubItem = createSelector(
  getLayoutState,
  (state: LayoutState) => state.hoveredNavSubItem
);

export const getHoveredNavSubSubItem = createSelector(
  getLayoutState,
  (state: LayoutState) => state.hoveredNavSubSubItem
);

export const getOpenedSideMenu = createSelector(
  getLayoutState,
  (state: LayoutState) => state.openedSideMenu
);

export const getShowNavSubMenu = createSelector(
  getLayoutState,
  (state: LayoutState) => state.showNavSubMenu
);

export const layoutQuery = {
  getHoveredNavItem,
  getHoveredNavSubItem,
  getHoveredNavSubSubItem,
  getOpenedSideMenu,
  getShowNavSubMenu
};
