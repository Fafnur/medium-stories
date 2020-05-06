import { TestBed, async } from '@angular/core/testing';

import { userStub } from '@medium-stories/users/testing';

import { FakeHardUserService } from '../../services/fake-hard-user.service';
import { WelcomeMockComponent } from './welcome-mock.component';

describe('WelcomeMockComponent', () => {
  let component: WelcomeMockComponent;
  let userService: FakeHardUserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        WelcomeMockComponent,
        {
          provide: FakeHardUserService,
          useValue: {}
        }
      ]
    }).compileComponents();
    component = TestBed.inject(WelcomeMockComponent);
    userService = TestBed.inject(FakeHardUserService);
  }));

  it('should not have welcome message after construction', () => {
    expect(component.welcome).toBeUndefined();
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    userService.getUser = jest.fn(() => userStub);
    userService.isLoggedIn = jest.fn(() => true);
    component.ngOnInit();
    expect(component.welcome).toContain(userService.getUser().username);
  });

  it('should ask user to log in if not logged in after ngOnInit', () => {
    userService.getUser = jest.fn(() => null);
    userService.isLoggedIn = jest.fn(() => false);
    component.ngOnInit();
    expect(component.welcome).not.toContain(userStub.username);
    expect(component.welcome).toContain('log in');
  });
});
