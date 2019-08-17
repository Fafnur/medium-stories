import { fromLayoutActions } from './layout.actions';
import { layoutInitialState, layoutReducer, LayoutState } from './layout.reducer';

describe('LayoutReducer', () => {
  let state: LayoutState;

  beforeEach(() => {
    state = layoutInitialState;
  });

  it('OpenMobileMenu() should open mobile menu', () => {
    const action = new fromLayoutActions.OpenSideMenu();
    state = layoutReducer(state, action);

    expect(state.openedSideMenu).toBeTruthy();
  });

  it('CloseMobileMenu() should close mobile menu', () => {
    const action = new fromLayoutActions.CloseSideMenu();
    state = layoutReducer(state, action);

    expect(state.openedSideMenu).toBeFalsy();
  });

  it('ToggleMobileMenu() should toggle mobile menu', () => {
    const action = new fromLayoutActions.ToggleSideMenu();
    state = layoutReducer(state, action);
    expect(state.openedSideMenu).toBeTruthy();

    state = layoutReducer(state, action);
    expect(state.openedSideMenu).toBeFalsy();
  });
});
