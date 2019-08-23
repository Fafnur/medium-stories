import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavSubmenuComponent } from './components/nav-submenu/nav-submenu.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SideLanguagesComponent } from './components/side-languages/side-languages.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideSearchComponent } from './components/side-search/side-search.component';
import { SideToolsComponent } from './components/side-tools/side-tools.component';
import { LogoComponent } from './components/logo/logo.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BaseLayoutComponent } from './containers/base-layout/base-layout.component';

export const layoutsComponents: any[] = [
  HamburgerComponent,
  HeaderComponent,
  LanguagesComponent,
  LogoComponent,
  NavMenuComponent,
  NavSubmenuComponent,
  SearchComponent,
  SidebarComponent,
  SideLanguagesComponent,
  SideMenuComponent,
  SideSearchComponent,
  SideToolsComponent,
  ToolbarComponent
];

export const layoutsContainers: any[] = [BaseLayoutComponent];
