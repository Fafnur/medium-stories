import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Event } from '@medium-stories/entities';

@Component({
  selector: 'medium-stories-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventBoxComponent {
  @Input() event: Event;
}
