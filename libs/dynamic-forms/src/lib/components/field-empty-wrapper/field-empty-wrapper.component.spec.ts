import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldEmptyWrapperComponent } from './field-empty-wrapper.component';

describe('FieldEmptyWrapperComponent', () => {
  let component: FieldEmptyWrapperComponent;
  let fixture: ComponentFixture<FieldEmptyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldEmptyWrapperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldEmptyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
