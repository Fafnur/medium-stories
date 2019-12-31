import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsModule as BaseEventsModule, EventsCoreModule } from '@medium-stories/events';
import { LayoutsModule } from '@medium-stories/layouts';

import { eventsRoutes } from './events.common';

@NgModule({
  imports: [EventsCoreModule.forRoot(), BaseEventsModule, LayoutsModule, RouterModule.forChild(eventsRoutes)]
})
export class EventsModule {}
