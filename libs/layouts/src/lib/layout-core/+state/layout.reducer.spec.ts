import { hoveredNavItemPayloadStub, navMenuEventActiveStub } from '@medium-stories/layouts/testing';
import { fromLayoutActions } from './layout.actions';
import { layoutInitialState, layoutReducer, LayoutState } from './layout.reducer';

describe('LayoutReducer', () => {
  let state: LayoutState;

  beforeEach(() => {
    state = layoutInitialState;
  });

  it('OpenMobileMenu() should open mobile menu', () => {
    const action = new fromLayoutActions.OpenSidebar();
    state = layoutReducer(state, action);

    expect(state.openedSidebar).toBeTruthy();
  });

  it('CloseMobileMenu() should close mobile menu', () => {
    const action = new fromLayoutActions.CloseSidebar();
    state = layoutReducer(state, action);

    expect(state.openedSidebar).toBeFalsy();
  });

  it('ToggleMobileMenu() should toggle mobile menu', () => {
    const action = new fromLayoutActions.ToggleSidebar();
    state = layoutReducer(state, action);
    expect(state.openedSidebar).toBeTruthy();

    state = layoutReducer(state, action);
    expect(state.openedSidebar).toBeFalsy();
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
