import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDetailsComponent } from './banner-details.component';

describe('BannerDetailsComponent', () => {
  let component: BannerDetailsComponent;
  let fixture: ComponentFixture<BannerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
