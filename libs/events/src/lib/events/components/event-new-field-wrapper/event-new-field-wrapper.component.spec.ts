import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNewFieldWrapperComponent } from './event-new-field-wrapper.component';

describe('EventNewFieldWrapperComponent', () => {
  let component: EventNewFieldWrapperComponent;
  let fixture: ComponentFixture<EventNewFieldWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventNewFieldWrapperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNewFieldWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
