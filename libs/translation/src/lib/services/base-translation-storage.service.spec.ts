import { async, TestBed } from '@angular/core/testing';

import { CookieStorage, MemoryStorage } from '@medium-stories/storage';

import { TranslationStorage } from '../interfaces/translation-storage.interface';
import { BaseTranslationStorage } from './base-translation-storage.service';

describe('BaseTranslationStorage', () => {
  let storage: TranslationStorage;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslationStorage,
          useClass: BaseTranslationStorage
        },
        {
          provide: CookieStorage,
          useClass: MemoryStorage
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    storage = TestBed.inject(TranslationStorage);
  });

  it('should create', () => {
    expect(storage).toBeTruthy();
  });
});
