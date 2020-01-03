import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLastComponent } from './event-last.component';

describe('EventLastComponent', () => {
  let component: EventLastComponent;
  let fixture: ComponentFixture<EventLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventLastComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
