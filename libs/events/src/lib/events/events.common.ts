import { Routes } from '@angular/router';

import { EventBoxComponent } from './components/event-box/event-box.component';
import { EventLastComponent } from './components/event-last/event-last.component';
import { EventViewComponent } from './containers/event-view/event-view.component';
import { EventsComponent } from './containers/events/events.component';

export const eventsComponents: any[] = [EventBoxComponent, EventLastComponent];

export const eventsContainers: any[] = [EventViewComponent, EventsComponent];

export const eventsRoutes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: ':id/view',
    component: EventViewComponent
  }
];
