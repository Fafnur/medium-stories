import { Routes } from '@angular/router';

import { eventsRoutes as baseEventRoutes } from '@medium-stories/events';
import { BaseLayoutComponent } from '@medium-stories/layouts';

export const eventsRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: baseEventRoutes
  }
];
