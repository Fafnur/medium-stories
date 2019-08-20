import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LAYOUT_FEATURE_KEY, LayoutState } from './layout.reducer';

const getLayoutState = createFeatureSelector<LayoutState>(LAYOUT_FEATURE_KEY);

export const getHoveredNavItem = createSelector(
  getLayoutState,
  (state: LayoutState) => state.hoveredNavItem
);

export const getHoveredNavItemByLevel = () =>
  createSelector(
    getLayoutState,
    (state: LayoutState, props: { level: number }) => {
      let navItem = null;
      switch (props.level) {
        case 2:
          navItem = state.hoveredNavSubSubItem;
          break;
        case 1:
          navItem = state.hoveredNavSubItem;
          break;
        default:
          navItem = state.hoveredNavItem;
      }

      return navItem;
    }
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
  getHoveredNavItemByLevel,
  getHoveredNavSubItem,
  getHoveredNavSubSubItem,
  getOpenedSideMenu,
  getShowNavSubMenu
};
