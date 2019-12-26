import { async, TestBed } from '@angular/core/testing';
import { EventsModule } from './events.module';

describe('EventsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EventsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EventsModule).toBeDefined();
  });
});
