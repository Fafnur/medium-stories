import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCarouselComponent } from './promo-carousel.component';

describe('PromoCarouselComponent', () => {
  let component: PromoCarouselComponent;
  let fixture: ComponentFixture<PromoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoCarouselComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
