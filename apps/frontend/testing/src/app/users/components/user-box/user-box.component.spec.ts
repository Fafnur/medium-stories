import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { eventStub } from '@medium-stories/events/testing';
import { cold, getTestScheduler } from '@nrwl/angular/testing';

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
            eventLast$: cold('-a|', { a: eventStub })
          }
        },
        {
          provide: UserFacade,
          useValue: {
            user$: cold('-a|', { a: userStub })
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

  it('preload$ should return loading or username', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Loading...');

    // update observables
    getTestScheduler().flush();
    fixture.detectChanges();
    expect(compiled.querySelector('h3').textContent).toContain(userStub.username);
  });
});
