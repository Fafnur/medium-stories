import { createState } from '@medium-stories/store/testing';

import { responsiveErrorStub, responsivePropertiesStub } from '../../testing';
import { fromResponsiveActions } from './responsive.actions';
import { responsiveInitialState, responsiveReducer, ResponsiveState } from './responsive.reducer';

describe('ResponsiveReducer', () => {
  let state: ResponsiveState;

  beforeEach(() => {
    state = responsiveInitialState;
  });

  describe('valid Responsive actions ', () => {
    it('InitiatingResponsive() should set initError null and initiating true', () => {
      const action = new fromResponsiveActions.InitiatingWindowProps();
      const result = responsiveReducer(state, action);

      expect(result.initError).toBeNull();
      expect(result.initiating).toBeTruthy();
    });

    it('WindowPropsInitialized() should set initiating false and set properties', () => {
      state = createState(responsiveInitialState, { initiating: true });
      const action = new fromResponsiveActions.WindowPropsInitialized(responsivePropertiesStub);
      const result = responsiveReducer(state, action);

      expect(result.height).toBe(responsivePropertiesStub.height);
      expect(result.mobile).toBe(responsivePropertiesStub.mobile);
      expect(result.width).toBe(responsivePropertiesStub.width);
      expect(result.initiating).toBeFalsy();
    });

    it('ResponsiveInitError() should set initError and initiating false', () => {
      state = createState(responsiveInitialState, { initiating: true });
      const action = new fromResponsiveActions.WindowPropsInitError(responsiveErrorStub);
      const result = responsiveReducer(state, action);

      expect(result.initError).toBe(responsiveErrorStub);
      expect(result.initiating).toBeFalsy();
    });

    it('SettingLanguage() should set setError null, currentLanguage = lang and setting true', () => {
      const action = new fromResponsiveActions.SetWindowProps(responsivePropertiesStub);
      const result = responsiveReducer(state, action);

      expect(result.height).toBe(responsivePropertiesStub.height);
      expect(result.mobile).toBe(responsivePropertiesStub.mobile);
      expect(result.width).toBe(responsivePropertiesStub.width);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = responsiveReducer(responsiveInitialState, action);

      expect(result).toBe(responsiveInitialState);
    });
  });
});
