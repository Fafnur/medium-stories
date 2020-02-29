import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LocalStorage, MemoryStorage } from '@ekapusta/storage';

import { TrackerLiteStorage } from '../interfaces/tracker-lite-storage.interface';
import { BaseTrackerLiteStorage } from './base-auth-storage.service';

describe('BaseTrackerLiteStorage', () => {
  let service: TrackerLiteStorage;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: TrackerLiteStorage,
          useClass: BaseTrackerLiteStorage
        },
        {
          provide: LocalStorage,
          useValue: MemoryStorage
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(TrackerLiteStorage);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
