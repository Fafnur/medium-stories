import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerDetailsComponent } from '../banner-details/banner-details.component';
import { BannerListComponent } from './banner-list.component';

describe('BannerListComponent', () => {
  let component: BannerListComponent;
  let bannersDetails: DebugElement[];
  let fixture: ComponentFixture<BannerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerListComponent, BannerDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bannersDetails = fixture.debugElement.queryAll(By.css('.banner-details'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise selected event when clicked', () => {
    bannersDetails[0].triggerEventHandler('click', null);
    expect(component.selectedBanner.name).toBe(component.banners[0].name);
  });
});
