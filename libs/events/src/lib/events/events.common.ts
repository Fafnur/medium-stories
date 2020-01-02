import { Routes } from '@angular/router';

import { EventLastComponent } from './components/event-last/event-last.component';
import { EventsComponent } from './containers/events/events.component';

export const eventsComponents: any[] = [EventLastComponent];
export const eventsContainers: any[] = [EventsComponent];

export const eventsRoutes: Routes = [
  {
    path: '',
    component: EventsComponent
  }
];
