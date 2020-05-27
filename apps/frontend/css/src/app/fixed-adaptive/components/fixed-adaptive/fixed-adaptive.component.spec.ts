import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAdaptiveComponent } from './fixed-adaptive.component';

describe('FixedAdaptiveComponent', () => {
  let component: FixedAdaptiveComponent;
  let fixture: ComponentFixture<FixedAdaptiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixedAdaptiveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAdaptiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
