import { Routes } from '@angular/router';

import { EventBoxComponent } from './components/event-box/event-box.component';
import { EventLastComponent } from './components/event-last/event-last.component';
import { EventNewFieldWrapperComponent } from './components/event-new-field-wrapper/event-new-field-wrapper.component';
import { EventNewComponent } from './containers/event-new/event-new.component';
import { EventViewComponent } from './containers/event-view/event-view.component';
import { EventsComponent } from './containers/events/events.component';

export const eventsComponents: any[] = [EventBoxComponent, EventLastComponent];

export const eventsEntryComponents: any[] = [EventNewFieldWrapperComponent];

export const eventsContainers: any[] = [EventNewComponent, EventViewComponent, EventsComponent];

export const eventsRoutes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'new',
    component: EventNewComponent
  },
  {
    path: ':id/view',
    component: EventViewComponent
  }
];
