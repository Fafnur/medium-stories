import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FakeHardUserService } from '../../services/fake-hard-user.service';

@Component({
  selector: 'medium-stories-welcome-mock',
  templateUrl: './welcome-mock.component.html',
  styleUrls: ['./welcome-mock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeMockComponent implements OnInit {
  /**
   * Welcome
   */
  welcome: string;

  constructor(private userService: FakeHardUserService) {}

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn() ? 'Welcome, ' + this.userService.getUser().username : 'Please log in.';
  }
}
