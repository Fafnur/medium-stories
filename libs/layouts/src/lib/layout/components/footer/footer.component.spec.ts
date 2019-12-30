import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockPipes } from 'ng-mocks';

import { AdaptivePipe } from '@medium-stories/responsive';

import { FooterCopyrightComponent } from '../footer-copyright/footer-copyright.component';
import { FooterMenuComponent } from '../footer-menu/footer-menu.component';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { FooterSocialComponent } from '../footer-social/footer-social.component';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        MockComponents(FooterNavComponent, FooterMenuComponent, FooterSocialComponent, FooterCopyrightComponent),
        MockPipes(AdaptivePipe)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
