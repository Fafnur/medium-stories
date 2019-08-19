import { hoveredNavItemPayloadStub, hoveredNavSubItemStub } from '../../testing';
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
    expect(state.hoveredNavItem).toBe(hoveredNavItemPayloadStub.id);
    expect(state.hoveredNavSubItem).toBeNull();
    expect(state.showNavSubMenu).toBe(hoveredNavItemPayloadStub.showNavSubMenu);
  });

  it('SetHoveredNavSubItem() should set hovered nav stub item', () => {
    const action = new fromLayoutActions.SetHoveredNavSubItem(hoveredNavSubItemStub);
    state = layoutReducer(state, action);
    expect(state.hoveredNavSubItem).toBe(hoveredNavSubItemStub);
  });

  it('SetHoveredNavSubItem() should set show nav sub menu false', () => {
    const action = new fromLayoutActions.HideNavSubMenu();
    state = layoutReducer(state, action);

    expect(state.hoveredNavItem).toBeNull();
    expect(state.hoveredNavSubItem).toBeNull();
    expect(state.showNavSubMenu).toBeFalsy();
  });
});
