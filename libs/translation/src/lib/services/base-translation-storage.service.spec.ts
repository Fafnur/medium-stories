import { async, TestBed } from '@angular/core/testing';

import { BaseTranslationStorage } from './base-translation-storage.service';
import { TranslationStorage } from '../interfaces/translation-storage.interface';

describe('BaseTranslationStorage', () => {
  let storage: TranslationStorage;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslationStorage,
          useClass: BaseTranslationStorage
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    storage = TestBed.get(TranslationStorage);
  });

  it('should create', () => {
    expect(storage).toBeTruthy();
  });
});
