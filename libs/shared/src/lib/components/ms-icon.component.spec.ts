import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsIconComponent } from './ms-icon.component';

describe('MsIconComponent', () => {
  let component: MsIconComponent;
  let fixture: ComponentFixture<MsIconComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [MsIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
