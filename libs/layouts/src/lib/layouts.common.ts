import { BaseLayoutComponent } from './containers/base-layout/base-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

export const layoutsComponents: any[] = [
  BaseLayoutComponent,
  HeaderComponent,
  LogoComponent,
  NavMenuComponent,
  SideMenuComponent,
  ToolbarComponent
];

export const layoutsContainers: any[] = [BaseLayoutComponent];
