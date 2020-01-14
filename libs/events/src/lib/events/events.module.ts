import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DynamicFormsModule } from '@medium-stories/dynamic-forms';
import { LayoutBreadcrumbsModule } from '@medium-stories/layouts';
import { ResponsiveModule } from '@medium-stories/responsive';
import { SharedModule } from '@medium-stories/shared';

import { eventsComponents, eventsContainers } from './events.common';

@NgModule({
  imports: [CommonModule, DynamicFormsModule, LayoutBreadcrumbsModule, RouterModule, ResponsiveModule, SharedModule, TranslateModule],
  declarations: [...eventsComponents, ...eventsContainers],
  exports: [...eventsComponents, ...eventsContainers]
})
export class EventsModule {}
