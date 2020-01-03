import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EventFacade } from '../../../events-core/+state/event.facade';

@Component({
  selector: 'medium-stories-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent {
  constructor(public eventFacade: EventFacade) {
    this.eventFacade.loadEvents({ excludeLast: true, order: JSON.stringify({ id: 'DESC' }) });
  }
}
