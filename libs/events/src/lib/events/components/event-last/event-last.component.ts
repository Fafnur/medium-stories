import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EventFacade } from '../../../events-core/+state/event.facade';

@Component({
  selector: 'medium-stories-event-last',
  templateUrl: './event-last.component.html',
  styleUrls: ['./event-last.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventLastComponent {
  constructor(public eventFacade: EventFacade) {
    this.eventFacade.loadLastEvent();
  }
}
