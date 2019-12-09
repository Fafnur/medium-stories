import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoTopComponent } from './promo-top.component';

describe('PromoTopComponent', () => {
  let component: PromoTopComponent;
  let fixture: ComponentFixture<PromoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoTopComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
