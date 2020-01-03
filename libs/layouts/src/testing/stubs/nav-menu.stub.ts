import { NavMenu, NavMenuEvent } from '../../lib/layout/interfaces/nav-menu.interface';

export const navMenuEventPreviousEmptyStub: NavMenuEvent = {
  id: 'nav',
  index: null,
  level: null,
  hovered: [null, null, null, null, null]
};

export const navMenuEventActiveEmptyStub: NavMenuEvent = {
  id: 'nav',
  index: null,
  level: null
};

export const navMenuHoveredEmptyStub: (number | null)[] = [null, null, null, null, null];

export const navMenuEmptyStub: NavMenu = {
  active: navMenuEventActiveEmptyStub,
  hovered: navMenuHoveredEmptyStub,
  previous: navMenuEventPreviousEmptyStub,
  showedSubmenu: false,
  subLevels: navMenuHoveredEmptyStub.length
};

export const navMenuEventPreviousStub: NavMenuEvent = {
  id: 'nav_0',
  index: null,
  level: null,
  hovered: [null, null, null, null, null]
};

export const navMenuEventActiveStub: NavMenuEvent = {
  id: 'nav_0',
  index: 2,
  level: 1
};

export const navMenuHoveredStub: (number | null)[] = [0, null, null, null, null];

export const navMenuStub: NavMenu = {
  active: navMenuEventActiveStub,
  hovered: navMenuHoveredStub,
  previous: navMenuEventPreviousStub,
  showedSubmenu: false,
  subLevels: navMenuHoveredStub.length
};
