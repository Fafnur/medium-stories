import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-stories-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent {}
