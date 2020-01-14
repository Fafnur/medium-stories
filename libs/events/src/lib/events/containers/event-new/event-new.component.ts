import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventNewComponent {
  constructor() {}
}
