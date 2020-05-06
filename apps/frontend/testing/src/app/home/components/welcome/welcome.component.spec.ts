import { TestBed, async } from '@angular/core/testing';

import { FakeUserService } from '../../services/fake-user.service';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let userService: FakeUserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeComponent, FakeUserService]
    }).compileComponents();
    component = TestBed.inject(WelcomeComponent);
    userService = TestBed.inject(FakeUserService);
  }));

  it('should not have welcome message after construction', () => {
    expect(component.welcome).toBeUndefined();
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.welcome).toContain(userService.getUser().username);
  });

  it('should ask user to log in if not logged in after ngOnInit', () => {
    userService.isLoggedIn = jest.fn(() => false);
    component.ngOnInit();
    expect(component.welcome).not.toContain(userService.getUser().username);
    expect(component.welcome).toContain('log in');
  });
});
