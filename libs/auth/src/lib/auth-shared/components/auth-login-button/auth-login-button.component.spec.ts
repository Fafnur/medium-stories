import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginButtonComponent } from './auth-login-button.component';

describe('AuthLoginButtonComponent', () => {
  let component: AuthLoginButtonComponent;
  let fixture: ComponentFixture<AuthLoginButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLoginButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
