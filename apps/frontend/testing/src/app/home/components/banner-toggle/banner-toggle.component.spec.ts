import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerToggleComponent } from './banner-toggle.component';

describe('BannerToggleComponent', () => {
  let component: BannerToggleComponent;
  let fixture: ComponentFixture<BannerToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerToggleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change messsage', () => {
    const divElement = fixture.debugElement.query(By.css('div'));
    divElement.triggerEventHandler('click', null);
    expect(component.message).toBe('Disable');
  });
});
