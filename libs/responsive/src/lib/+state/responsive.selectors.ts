import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RESPONSIVE_FEATURE_KEY, ResponsiveState } from './responsive.reducer';

// Lookup the 'Responsive' feature state managed by NgRx
const getResponsiveState = createFeatureSelector<ResponsiveState>(RESPONSIVE_FEATURE_KEY);

const getLoaded = createSelector(
  getResponsiveState,
  (state: ResponsiveState) => state.loaded
);
const getError = createSelector(
  getResponsiveState,
  (state: ResponsiveState) => state.error
);

const getAllResponsive = createSelector(
  getResponsiveState,
  getLoaded,
  (state: ResponsiveState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getResponsiveState,
  (state: ResponsiveState) => state.selectedId
);
const getSelectedResponsive = createSelector(
  getAllResponsive,
  getSelectedId,
  (responsive, id) => {
    const result = responsive.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const responsiveQuery = {
  getLoaded,
  getError,
  getAllResponsive,
  getSelectedResponsive
};
