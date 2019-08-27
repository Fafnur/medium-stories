import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialComponent } from './footer-social.component';

describe('FooterSocialComponent', () => {
  let component: FooterSocialComponent;
  let fixture: ComponentFixture<FooterSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSocialComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
