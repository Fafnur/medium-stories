import { Routes } from '@angular/router';

import { EventsComponent } from './containers/events/events.component';

export const eventsContainers: any[] = [EventsComponent];

export const eventsRoutes: Routes = [
  {
    path: '',
    component: EventsComponent
  }
];
