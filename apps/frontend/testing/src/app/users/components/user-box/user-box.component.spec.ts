import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EventFacade } from '@medium-stories/events';
import { UserFacade } from '@medium-stories/users';
import { userStub } from '@medium-stories/users/testing';

import { UserBoxComponent } from './user-box.component';

describe('UserBoxComponent', () => {
  let component: UserBoxComponent;
  let eventFacade: EventFacade;
  let userFacade: UserFacade;
  let fixture: ComponentFixture<UserBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserBoxComponent],
      providers: [
        {
          provide: EventFacade,
          useValue: {
            eventLast$: of()
          }
        },
        {
          provide: UserFacade,
          useValue: {
            user$: of()
          }
        }
      ]
    }).compileComponents();
    eventFacade = TestBed.inject(EventFacade);
    userFacade = TestBed.inject(UserFacade);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBoxComponent);
    component = fixture.componentInstance;
    component.user = userStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
