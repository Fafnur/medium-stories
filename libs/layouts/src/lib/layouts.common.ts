import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SearchComponent } from './components/search/search.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BaseLayoutComponent } from './containers/base-layout/base-layout.component';

export const layoutsComponents: any[] = [
  HamburgerComponent,
  HeaderComponent,
  LogoComponent,
  NavMenuComponent,
  SearchComponent,
  SideMenuComponent,
  ToolbarComponent
];

export const layoutsContainers: any[] = [BaseLayoutComponent];
