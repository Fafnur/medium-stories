import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LAYOUT_FEATURE_KEY, LayoutState } from './layout.reducer';

// Lookup the 'Layout' feature state managed by NgRx
const getLayoutState = createFeatureSelector<LayoutState>(LAYOUT_FEATURE_KEY);

const getLoaded = createSelector(
  getLayoutState,
  (state: LayoutState) => state.loaded
);
const getError = createSelector(
  getLayoutState,
  (state: LayoutState) => state.error
);

const getAllLayout = createSelector(
  getLayoutState,
  getLoaded,
  (state: LayoutState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getLayoutState,
  (state: LayoutState) => state.selectedId
);
const getSelectedLayout = createSelector(
  getAllLayout,
  getSelectedId,
  (layout, id) => {
    const result = layout.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const layoutQuery = {
  getLoaded,
  getError,
  getAllLayout,
  getSelectedLayout
};
