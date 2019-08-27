import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCopyrightComponent } from './footer-copyright.component';

describe('FooterCopyrightComponent', () => {
  let component: FooterCopyrightComponent;
  let fixture: ComponentFixture<FooterCopyrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterCopyrightComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
