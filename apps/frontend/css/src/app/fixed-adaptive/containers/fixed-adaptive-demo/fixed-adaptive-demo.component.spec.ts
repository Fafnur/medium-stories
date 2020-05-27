import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAdaptiveDemoComponent } from './fixed-adaptive-demo.component';

describe('FixedAdaptiveDemoComponent', () => {
  let component: FixedAdaptiveDemoComponent;
  let fixture: ComponentFixture<FixedAdaptiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixedAdaptiveDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAdaptiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
