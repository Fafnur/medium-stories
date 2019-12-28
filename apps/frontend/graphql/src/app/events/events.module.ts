import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { EventsModule as BaseEventsModule, EventsCoreModule } from '@medium-stories/events';
import { LayoutsModule } from '@medium-stories/layouts';

import { eventsRoutes } from './events.common';

@NgModule({
  imports: [EventsCoreModule.forRoot(), BaseEventsModule, LayoutsModule, RouterModule.forChild(eventsRoutes)]
})
export class EventsModule {}
