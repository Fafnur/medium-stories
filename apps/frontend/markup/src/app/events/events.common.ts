import { Routes } from '@angular/router';

import { BaseLayoutComponent } from '@medium-stories/layouts';

import { EventsComponent } from './containers/events/events.component';

export const eventsContainers: any[] = [EventsComponent];

export const eventsRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: EventsComponent
      }
    ]
  }
];
