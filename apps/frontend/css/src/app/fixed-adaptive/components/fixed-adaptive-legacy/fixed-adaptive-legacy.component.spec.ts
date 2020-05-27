import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAdaptiveLegacyComponent } from './fixed-adaptive-legacy.component';

describe('FixedAdaptiveLegacyComponent', () => {
  let component: FixedAdaptiveLegacyComponent;
  let fixture: ComponentFixture<FixedAdaptiveLegacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixedAdaptiveLegacyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAdaptiveLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
