import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UserFacade } from '../../../users-core/interfaces/user-facade.interface';

@Component({
  selector: 'medium-stories-user-load-button',
  templateUrl: './user-load-button.component.html',
  styleUrls: ['./user-load-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoadButtonComponent {
  constructor(private userFacade: UserFacade) {}

  onLoadUser(): void {
    this.userFacade.loadUser();
  }
}
