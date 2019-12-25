import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutsModule } from '@medium-stories/layouts';
import { ResponsiveModule } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { eventsContainers, eventsRoutes } from './events.common';

@NgModule({
  imports: [CommonModule, LayoutsModule, ResponsiveModule, RouterModule.forChild(eventsRoutes), SharedModule, TranslateModule],
  declarations: [...eventsContainers]
})
export class EventsModule {}
