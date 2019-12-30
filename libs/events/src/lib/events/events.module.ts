import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutBreadcrumbsModule } from '@medium-stories/layouts';
import { SharedModule } from '@medium-stories/shared';

import { eventsContainers } from './events.common';

@NgModule({
  imports: [CommonModule, LayoutBreadcrumbsModule, RouterModule, SharedModule, TranslateModule],
  declarations: [...eventsContainers],
  exports: [...eventsContainers]
})
export class EventsModule {}
