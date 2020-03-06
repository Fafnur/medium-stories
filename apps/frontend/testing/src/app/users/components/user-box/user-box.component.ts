import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Event, User } from '@medium-stories/entities';
import { EventFacade } from '@medium-stories/events';
import { UserFacade } from '@medium-stories/users';

@Component({
  selector: 'medium-stories-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBoxComponent {
  @Input() user: User;

  preload$ = combineLatest([this.eventFacade.eventLast$, this.userFacade.user$]).pipe(
    map<[Event, User], boolean>(data => data.every(value => value != null))
  );

  constructor(private eventFacade: EventFacade, private userFacade: UserFacade) {}
}
