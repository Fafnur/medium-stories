import { Routes } from '@angular/router';

import { BannerDetailsComponent } from './components/banner-details/banner-details.component';
import { BannerEditComponent } from './components/banner-edit/banner-edit.component';
import { BannerListComponent } from './components/banner-list/banner-list.component';
import { BannerTitleComponent } from './components/banner-title/banner-title.component';
import { BannerToggleComponent } from './components/banner-toggle/banner-toggle.component';
import { BannerComponent } from './components/banner/banner.component';
import { DashboardHeroComponent } from './components/dashboard-hero/dashboard-hero.component';
import { LightswitchComponent } from './components/lightswitch/lightswitch.component';
import { WelcomeMockComponent } from './components/welcome-mock/welcome-mock.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './containers/home/home.component';
import { UserComponent } from './containers/user/user.component';
import { FakeHardUserService } from './services/fake-hard-user.service';
import { FakeUserService } from './services/fake-user.service';

export const homeComponents: any[] = [
  LightswitchComponent,
  DashboardHeroComponent,
  WelcomeComponent,
  WelcomeMockComponent,
  BannerComponent,
  BannerTitleComponent,
  BannerEditComponent,
  BannerListComponent,
  BannerDetailsComponent,
  BannerToggleComponent
];

export const homeContainers: any[] = [HomeComponent, UserComponent];

export const homeProviders: any[] = [FakeUserService, FakeHardUserService];

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];
