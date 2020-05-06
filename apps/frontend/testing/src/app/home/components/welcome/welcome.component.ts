import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FakeUserService } from '../../services/fake-user.service';

@Component({
  selector: 'medium-stories-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit {
  /**
   * Welcome
   */
  welcome: string;

  constructor(private userService: FakeUserService) {}

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn() ? 'Welcome, ' + this.userService.getUser().username : 'Please log in.';
  }
}
