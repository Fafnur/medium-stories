import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoadButtonComponent } from './user-load-button.component';

describe('UserLoadButtonComponent', () => {
  let component: UserLoadButtonComponent;
  let fixture: ComponentFixture<UserLoadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoadButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
