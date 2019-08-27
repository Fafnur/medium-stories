import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMenuComponent } from './footer-menu.component';

describe('FooterMenuComponent', () => {
  let component: FooterMenuComponent;
  let fixture: ComponentFixture<FooterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
