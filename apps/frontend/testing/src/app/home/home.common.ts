import { Routes } from '@angular/router';

import { DashboardHeroComponent } from './components/dashboard-hero/dashboard-hero.component';
import { LightswitchComponent } from './components/lightswitch/lightswitch.component';
import { WelcomeMockComponent } from './components/welcome-mock/welcome-mock.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './containers/home/home.component';
import { FakeHardUserService } from './services/fake-hard-user.service';
import { FakeUserService } from './services/fake-user.service';

export const homeComponents: any[] = [LightswitchComponent, DashboardHeroComponent, WelcomeComponent, WelcomeMockComponent];

export const homeContainers: any[] = [HomeComponent];

export const homeProviders: any[] = [FakeUserService, FakeHardUserService];

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
