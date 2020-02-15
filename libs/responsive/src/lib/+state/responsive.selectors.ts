import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RESPONSIVE_FEATURE_KEY, ResponsiveState } from './responsive.reducer';

const getResponsiveState = createFeatureSelector<ResponsiveState>(RESPONSIVE_FEATURE_KEY);

const getHeight = createSelector(getResponsiveState, (state: ResponsiveState) => state.height);

const getInitError = createSelector(getResponsiveState, (state: ResponsiveState) => state.initError);

const getInitialized = createSelector(getResponsiveState, (state: ResponsiveState) => state.initialized);

const getInitiating = createSelector(getResponsiveState, (state: ResponsiveState) => state.initiating);

const getMobile = createSelector(getResponsiveState, (state: ResponsiveState) => state.mobile);

const getProperties = createSelector(getResponsiveState, (state: ResponsiveState) => ({
  height: state.height,
  mobile: state.mobile,
  width: state.width
}));

const getResponsiveType = createSelector(getResponsiveState, (state: ResponsiveState) => state.responsiveType);

const getWidth = createSelector(getResponsiveState, (state: ResponsiveState) => state.width);

export const responsiveQuery = {
  getHeight,
  getInitError,
  getInitialized,
  getInitiating,
  getMobile,
  getProperties,
  getResponsiveType,
  getWidth
};
