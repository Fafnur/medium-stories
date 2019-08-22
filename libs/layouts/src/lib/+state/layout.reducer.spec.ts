import { hoveredNavItemPayloadStub, navMenuEventActiveStub } from '../../testing';
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

  it('SetHoveredNavItem() should set hovered nav item', () => {
    const action = new fromLayoutActions.SetHoveredNavItem(hoveredNavItemPayloadStub);
    state = layoutReducer(state, action);
    expect(state.menu.active).toEqual(navMenuEventActiveStub);
  });

  it('HideNavSubMenu() should hide nav sub menu', () => {
    const action = new fromLayoutActions.HideNavSubMenu();
    state = layoutReducer(state, action);

    expect(state.menu).toEqual(layoutInitialState.menu);
  });
});
