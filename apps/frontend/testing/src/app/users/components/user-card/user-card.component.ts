import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '@medium-stories/entities';

@Component({
  selector: 'medium-stories-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user: User;
}
