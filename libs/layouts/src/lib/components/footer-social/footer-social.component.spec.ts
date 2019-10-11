import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { MockComponents, MockPipes } from 'ng-mocks';

import { MsIconComponent } from '@medium-stories/shared';
import { FooterSocialComponent } from './footer-social.component';

describe('FooterSocialComponent', () => {
  let component: FooterSocialComponent;
  let fixture: ComponentFixture<FooterSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSocialComponent, MockComponents(MsIconComponent), MockPipes(TranslatePipe)]
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
