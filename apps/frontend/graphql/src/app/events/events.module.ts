import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsCoreModule, EventsModule as BaseEventsModule } from '@medium-stories/events';
import { LayoutsModule } from '@medium-stories/layouts';

import { eventsRoutes } from './events.common';

@NgModule({
  imports: [EventsCoreModule.forRoot(), BaseEventsModule, LayoutsModule, RouterModule.forChild(eventsRoutes)]
})
export class EventsModule {}
