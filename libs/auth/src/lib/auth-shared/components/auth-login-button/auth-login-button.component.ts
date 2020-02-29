import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthFacade } from '../../../auth-core/interfaces/auth-facade.interface';

@Component({
  selector: 'medium-stories-auth-login-button',
  templateUrl: './auth-login-button.component.html',
  styleUrls: ['./auth-login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginButtonComponent {
  constructor(public authFacade: AuthFacade) {}

  onSignIn(): void {
    this.authFacade.signInSet({ username: 'admin', password: '123456' });
    this.authFacade.signIn();
  }
}
