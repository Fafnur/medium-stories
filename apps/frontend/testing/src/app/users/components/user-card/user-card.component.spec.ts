import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { userStub } from '@medium-stories/users/testing';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.user = userStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(`Hello, ${userStub.username}!`);
  });
});
