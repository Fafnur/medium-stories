import { createStore } from '@medium-stories/store/testing';

import { responsiveErrorStub, responsivePropertiesStub, responsiveTypeStub } from '../../testing';
import { RESPONSIVE_FEATURE_KEY, responsiveInitialState, ResponsivePartialState } from './responsive.reducer';
import { responsiveQuery } from './responsive.selectors';

describe('ResponsiveSelectors', () => {
  const KEY = RESPONSIVE_FEATURE_KEY;

  let store: ResponsivePartialState;

  beforeEach(() => {
    store = createStore(KEY, responsiveInitialState);
  });

  describe('Responsive Selectors', () => {
    it('getHeight() should return height', () => {
      store = createStore(KEY, responsiveInitialState, { height: responsivePropertiesStub.height });
      const results = responsiveQuery.getHeight(store);

      expect(results).toBe(responsivePropertiesStub.height);
    });

    it('getInitError() should return initError', () => {
      store = createStore(KEY, responsiveInitialState, { initError: responsiveErrorStub });
      const results = responsiveQuery.getInitError(store);

      expect(results).toBe(responsiveErrorStub);
    });

    it('getInitialized() should return initialized', () => {
      store = createStore(KEY, responsiveInitialState, { initialized: true });
      const results = responsiveQuery.getInitialized(store);

      expect(results).toBeTruthy();
    });

    it('getInitiating() should return initiating', () => {
      store = createStore(KEY, responsiveInitialState, { initiating: true });
      const results = responsiveQuery.getInitiating(store);

      expect(results).toBeTruthy();
    });

    it('getMobile() should return mobile', () => {
      store = createStore(KEY, responsiveInitialState, { mobile: responsivePropertiesStub.mobile });
      const results = responsiveQuery.getMobile(store);

      expect(results).toBe(responsivePropertiesStub.mobile);
    });

    it('getProperties() should return properties', () => {
      store = createStore(KEY, responsiveInitialState, responsivePropertiesStub);
      const results = responsiveQuery.getProperties(store);

      expect(results).toEqual(responsivePropertiesStub);
    });

    it('getResponsiveType() should return responsiveType', () => {
      store = createStore(KEY, responsiveInitialState, { responsiveType: responsiveTypeStub });
      const results = responsiveQuery.getResponsiveType(store);

      expect(results).toBe(responsiveTypeStub);
    });

    it('getWidth() should return width', () => {
      store = createStore(KEY, responsiveInitialState, { width: responsivePropertiesStub.width });
      const results = responsiveQuery.getWidth(store);

      expect(results).toBe(responsivePropertiesStub.width);
    });
  });
});
