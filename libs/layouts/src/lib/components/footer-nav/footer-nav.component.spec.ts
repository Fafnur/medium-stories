import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavComponent } from './footer-nav.component';

describe('FooterNavComponent', () => {
  let component: FooterNavComponent;
  let fixture: ComponentFixture<FooterNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
