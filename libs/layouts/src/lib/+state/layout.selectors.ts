import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LAYOUT_FEATURE_KEY, LayoutState } from './layout.reducer';

const getLayoutState = createFeatureSelector<LayoutState>(LAYOUT_FEATURE_KEY);

export const getOpenedSideMenu = createSelector(
  getLayoutState,
  (state: LayoutState) => state.openedSideMenu
);

export const layoutQuery = {
  getOpenedSideMenu
};
