import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { eventsContainers } from './events.common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@medium-stories/shared';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, TranslateModule],
  declarations: [...eventsContainers],
  exports: [...eventsContainers]
})
export class EventsModule {}
